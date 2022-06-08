import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import React from "react";

const HistoryFeedItem = ( { type, value } ) => {
    let body: string | JSX.Element;

    if ( type === "comment" ) body = value;
    else if ( type === "rating" ) {
        body = value === "up"
            ? <BsHandThumbsUp className="text-xl my-1 text-green-700" />
            : <BsHandThumbsDown className="text-xl my-1 text-red-700" />;
    }

    const actionTaken = type === "rating" ? "Rated" : "Posted";

    return (
        <div className="bg-gray-800 p-2 rounded-sm text-xs my-2">
            <a className="link">Whatever title of build is...</a>
            <p className="pl-2 text-2xs">{ body }</p>
            <div className="text-gray-500">{ actionTaken } 12 days ago</div>
        </div>
    );
};

export default HistoryFeedItem;