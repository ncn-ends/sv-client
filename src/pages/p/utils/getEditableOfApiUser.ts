/*
 * Converts apiUser object into an object with only editable properties.
 */
import { EditableProperties, ProfileDataEditable } from "../../../common/types/UserProfile";

const getEditableOfApiUser = ( { apiUser } ): ProfileDataEditable => {
    const editableProps: EditableProperties = [
        "discordId",
        "gameProfileLink",
        "gamerTag",
        "nickname",
        "profileBio",
        "twitchLink"
    ];

    const entries = Object.keys( apiUser );
    const editableEntries = entries.filter(
        ( key: keyof ProfileDataEditable ) => editableProps.includes( key )
    );
    const freshProfile = editableEntries.reduce( ( acc, item ) => {
        return {
            ...acc,
            [item]: apiUser[item]
        }
    }, {} as ProfileDataEditable );

    return freshProfile;
}

export default getEditableOfApiUser;