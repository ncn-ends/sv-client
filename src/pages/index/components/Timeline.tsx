import { TimelineLine } from "@/pages/index/components/TimelineLine";
import { TimelineCard } from "@/pages/index/components/TimelineCard";
import React from "react";

const Timeline = ( { items } ) => {
    return (
        <div className="w-full flex flex-col">
            <h2 className="">Timeline</h2>
            <div className="flex justify-center relative">
                <TimelineLine />
                { items.map( ( { title, body, subtitle }, place ) => (
                    <TimelineCard
                        title={ title }
                        subtitle={ subtitle }
                        body={ body }
                        place={ place + 1 }
                    />
                ) ) }
            </div>
        </div>
    )
}

export { Timeline }