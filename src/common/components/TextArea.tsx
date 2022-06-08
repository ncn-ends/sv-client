import React, { useContext } from "react";
import { userProfileContext } from "../../pages/p/[user_id].page";

const TextArea = ( { value, change } ) => {

    return <textarea
        className="input-styles p-2"
        value={ value }
        onChange={ change }
    />;
}

export default TextArea;