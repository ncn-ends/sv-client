import { useState } from "react";
import { UnitType } from "../../../common/types/main";

type BuildListItemData = {
    unitId: number,
    uuid: string,
    note: string
}

type Item = Partial<UnitType & BuildListItemData>

export default function useBuildOrder() {
    const [ buildOrder, setBuildOrder ] = useState<Array<Item>>( [
        {
            unitId: 10, uuid: "6d25cc9e-3bb7-447e-a9a5-36c25cdde016", note: ""
        },
        {
            unitId: 10, uuid: "6d25cc9e-3bb7-447e-a9a5-36c25cdde013", note: ""
        },
        {
            unitId: 10, uuid: "6d25cc9e-3bb7-447e-a9a5-36c25cdde015", note: ""
        }
    ] );

    // TODO: localstorage stuff
    return [ buildOrder, setBuildOrder ] as const;
}
