/**
 * FixedSizeList vs VariableSizeList
 *      - FixedSizeList is for when the rows are always going to be the same height
 */
import { FixedSizeList as List } from 'react-window';
import { AbstractFC } from "@/types/main";


type FilterList = AbstractFC<{
    row: React.ReactNode
}>
const FilterList: FilterList = ( { row: Row } ) => {
    return (
        <List
            height={ 150 }
            itemCount={ 1000 }
            itemSize={ 35 }
            width={ 300 }
        >
            { Row }
        </List>
    )
}

export { FilterList };