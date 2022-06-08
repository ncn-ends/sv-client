import axios from "axios";


const populateUserData = ({user_id, setApiUser, isLoading, tokenUser, setFetchError}) => {
    ( async () => {
        try {
            if ( user_id !== "me" ) {
                const res = await axios.get( "https://localhost:5001" + "/user?id=" + user_id );
                return setApiUser( res.data );
            }
            if ( !isLoading && tokenUser ) {
                const res = await axios.get( "http://localhost:3000" + "/api/user/me" );
                // res.data.profileBio = "asd asd asd asd"; // TODO: delete this before commit
                return setApiUser( res.data );
            }
        } catch ( e ) {
            console.error( e );
            setFetchError( e.response?.status )
        }
    } )();
}

export default populateUserData;