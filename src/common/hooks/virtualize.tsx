import React, { useCallback, useEffect, useState } from "react";
import { AutoSizer, InfiniteLoader, List, WindowScroller } from "react-virtualized";
import faker from "faker";

function VirtualizedList( {
                              /** Are there more items to load? (This information comes from the most recent API request.) */
                              hasNextPage,

                              /** Are we currently loading a page of items? (This may be an in-flight flag in your Redux store for example.) */
                              isNextPageLoading,

                              /** List of items loaded so far */
                              list,

                              // Callback function responsible for loading the next page of items.
                              loadNextPage,

                              // something
                              itemComponent,
                          } ) {
    /**
     * If there are more items to be loaded then add an extra row to hold a loading indicator.
     * POSSIBLY THE WAY THAT MORE ROWS ARE GOING TO BE ADDED VIA A TRIGGER
     */
    const rowCount = hasNextPage ? list.length + 1 : list.length;

    /**
     * Callback function which holds the loaded state of each item in the list.
     * All rows will be considered loaded if there are no more items to load.
     * Otherwise, only the "loading" row will be considered NOT loaded,
     * since only the "loading" row will be considered equal to or greater than the list.length.
     * Refer to rowCount for more details
     *
     * @example ({ index: number }): boolean
     */
    const isRowLoaded = ( index ) => !hasNextPage || index < list.length;

    /*
     * Only load 1 page of items at a time.
     * Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
     */
    const loadMoreRows = isNextPageLoading ? () => {
    } : loadNextPage;

    const rowRenderer = useCallback( ( { index, style, key } ) => {
        let content: string;
        if ( !isRowLoaded( index ) ) {
            content = "Loading...";
        } else {
            content = list[index];
        }

        return itemComponent( { style, key, content } );
        // return renderer
    }, [] );
    // const rowRenderer = useCallback( wrappedComponent, [] );


    return (
        <InfiniteLoader
            isRowLoaded={ isRowLoaded }
            loadMoreRows={ loadMoreRows }
            rowCount={ rowCount }
            threshold={ 10 }
        >
            { ( { onRowsRendered, registerChild } ) => (
                <WindowScroller>
                    { ( { height, isScrolling, scrollTop } ) => (
                        <AutoSizer disableHeight>
                            { ( { width } ) => (
                                <List
                                    height={ height }
                                    onRowsRendered={ onRowsRendered }
                                    ref={ registerChild }
                                    rowCount={ rowCount }
                                    rowHeight={ 50 }
                                    rowRenderer={ rowRenderer }
                                    width={ width }
                                    autoHeight
                                    isScrolling={ isScrolling }
                                    scrollTop={ scrollTop }
                                />
                            ) }
                        </AutoSizer>
                    ) }
                </WindowScroller>
            ) }
        </InfiniteLoader>
    );
}

type useVirtualizationPropType = {
    itemComponent: React.ReactNode;
    hasNextPage: boolean,
    isNextPageLoading: boolean,
    loadNextPage: Function,
    list: any[]
};

export default function virtualize( {
                                        itemComponent
                                    }: useVirtualizationPropType ) {


    const [list, setList] = useState<any[]>( [] );
    const [isNextPageLoading, setIsNextPageLoading] = useState<boolean>( false );
    const [hasNextPage, setHasNextPage] = useState<boolean>( true );

    const loadNextPage = ( { startIndex, stopIndex } ) => {
        setIsNextPageLoading( true );

        if ( list.length <= stopIndex ) {
            setList( prev => [
                ...prev,
                ...Array.from( { length: 25 }, () => faker.name.findName() )
            ] );
        }
        // SET HAS NEXT PAGE WITH REAL API ONCE IMPLEMENTED
        setIsNextPageLoading( false );
    };


    useEffect( () => {
        setList( prev => [...prev, ...Array.from( { length: 20 }, () => faker.name.findName() )] );
    }, [] );
    return (
        <VirtualizedList
            hasNextPage={ hasNextPage }
            isNextPageLoading={ isNextPageLoading }
            list={ list }
            loadNextPage={ loadNextPage }
            itemComponent={ itemComponent }
        />
    );
}