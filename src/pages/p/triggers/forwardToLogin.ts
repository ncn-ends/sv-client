const forwardToLogin = ( { user_id, tokenUser, isLoading, router } ) => {
    if ( user_id === "me" && !( tokenUser || isLoading ) ) {
        router.push( "/api/auth/login?returnTo=/p/me" );
    }
}
export default forwardToLogin;