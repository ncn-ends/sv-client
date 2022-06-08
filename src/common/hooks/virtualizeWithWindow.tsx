import React, { useCallback, useMemo } from "react";
import 'react-virtualized/styles.css';

// import { 
// AutoSizer, 
// InfiniteLoader, 
// List, 
// WindowScroller 
// } from "react-virtualized";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from "react-virtualized-auto-sizer";
import { WindowScroller } from "react-virtualized";


const Row = ( ( { index, style, itemComponent: ItemComponent } ) => {

    return <ItemComponent
        style={ style }
        key={ index }
    />
} );

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
    const itemCount = hasNextPage ? list.length + 1 : list.length;

    /**
     * Callback function which holds the loaded state of each item in the list.
     * All rows will be considered loaded if there are no more items to load.
     * Otherwise, only the "loading" row will be considered NOT loaded,
     * since only the "loading" row will be considered equal to or greater than the list.length.
     * Refer to rowCount for more details
     *
     * @example ({ index: number }): boolean
     */
    const isItemLoaded = ( index ) => !hasNextPage || index < list.length;

    /*
     * Only load 1 page of items at a time.
     * Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
     */
    const loadMoreItems = isNextPageLoading ? () => {
    } : loadNextPage;

    // const rowRenderer = useCallback( wrappedComponent, [] );

    const RowWrapper = ( props ) => <Row { ...props } itemComponent={ itemComponent } />
    return (
        <InfiniteLoader
            isItemLoaded={ isItemLoaded }
            loadMoreItems={ loadMoreItems }
            itemCount={ itemCount }
            threshold={ 10 }
        >
            { ( { onItemsRendered, ref } ) => (
                <WindowScroller scrollingResetTimeInterval={ 1000 }>
                    { ( { height, isScrolling, scrollTop } ) => (
                        <AutoSizer disableHeight>
                            { ( { width } ) => (
                                <List
                                    height={ height }
                                    onItemsRendered={ onItemsRendered }
                                    ref={ ref }
                                    itemCount={ itemCount }
                                    useIsScrolling={ isScrolling }
                                    initialScrollOffset={ scrollTop }
                                    width={ width }
                                    itemSize={ 50 }
                                >
                                    { RowWrapper }
                                </List>
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

const virtualizeWithWindow = ( {
                                   itemComponent,
                                   hasNextPage,
                                   isNextPageLoading,
                                   list,
                                   loadNextPage
                               }: useVirtualizationPropType ) => {
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

export { virtualizeWithWindow }