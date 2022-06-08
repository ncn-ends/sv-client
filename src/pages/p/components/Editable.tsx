import React, { useContext } from 'react';
import { userProfileContext } from "../[user_id].page";
import { ProfileDataEditable } from "../../../common/types/UserProfile";
import { OnChangeFunc } from "../../../common/types/main";

type Editable = ( props: {
                      text: string,
                      property: keyof ProfileDataEditable
                  }
) => JSX.Element;

const Editable: Editable = ( { text, property } ) => {
    const { isEditingProfile, setUpdatedProfile, updatedProfile } = useContext( userProfileContext );

    const onChange: OnChangeFunc = ( e ) => {
        setUpdatedProfile( ( prevState: ProfileDataEditable ) => {
            return { ...prevState, [property]: e.target.value }
        } );
    };

    if ( isEditingProfile ) return <input
        value={ updatedProfile[property] }
        type="text"
        className="input-styles p-1"
        placeholder={ property }
        onChange={ onChange }
    />

    return <div className="pr-1 pt-1 pb-1">{ text }</div>
};

export default Editable;