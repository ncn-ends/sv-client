import React from "react";
import HistoryFeedItem from "./HistoryFeedItem";

const HistorySection = () => {
    const section_body = "flex flex-col min-h-[16rem] border-l-[1px] pl-4 border-gray-600 ml-2 text-sm";
    const dummy_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget enim nec ligula condimentum pharetra et a lectus. Integer molestie quis enim ut luctus [...]";

    return (
        <div className="flex p-4">
            <div className="w-3/5">
                <div className={ `section_title text-lg` }>Builds</div>
                <div className={ section_body }>asd
                    <a className={ "link text-xs" }>More (redirects to find page)</a></div>
            </div>
            <div className="w-2/5">
                <div className="section_title">Feed</div>
                <div className={ section_body }>
                    <HistoryFeedItem type="comment" value={ dummy_text } />
                    <HistoryFeedItem type="rating" value="up" />
                    <HistoryFeedItem type="rating" value="down" />
                    <HistoryFeedItem type="comment" value={ dummy_text } />
                </div>
            </div>
        </div>
    );
};

export default HistorySection;