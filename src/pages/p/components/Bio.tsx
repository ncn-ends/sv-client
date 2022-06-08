import React, { useContext } from "react";
import { userProfileContext } from "../[user_id].page";
import TextArea from "@/components/TextArea";
import { OnChangeFunc } from "../../../common/types/main";

const Bio = (): JSX.Element => {
    // user.profileBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget enim nec ligula condimentumpharetra et a lectus. Integer molestie quis enim ut luctus. Proin quis ultricies diam, eu euismod risus.Quisque consectetur nec velit quis varius. Nunc fermentum et."

    const { isEditingProfile, apiUser, setUpdatedProfile, updatedProfile } = useContext( userProfileContext );
    const profileBioBody = (
        <div className="text-sm pl-6 ml-2 border-l-[1px] py-2 border-gray-400 text-gray-400">
            { apiUser.profileBio || <div className="text-center italic">Empty...</div> }
        </div>
    )

    const onChange: OnChangeFunc = ( e ) => {
        setUpdatedProfile( prevState => ( {
            ...prevState,
            profileBio: e.target.value
        } ) )
    }
    return (
        <div className={ "flex flex-col mx-[clamp(1rem,12vw-3rem,8vw)]" }>
            <div className="section_title">Bio</div>

            { isEditingProfile
                ? <TextArea value={ updatedProfile?.profileBio } change={ onChange } />
                : profileBioBody
            }
        </div>
    );
};

export default Bio;