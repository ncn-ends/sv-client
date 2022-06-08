const initialState = {
    pageNumber: 0
};

function pageReducer(state = initialState,
                     action) {
    switch (action.type) {
        case "page/incremented":
            return {...state, pageNumber: state.pageNumber + 1}
        case "page/decremented":
            return {...state, pageNumber: state.pageNumber - 1}
        default:
            return state;
    }
}

export default pageReducer;