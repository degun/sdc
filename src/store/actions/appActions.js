export const setScrollPosition = scroll => {
    return dispatch => {
        dispatch({type: "SET_SCROLL_POSITION", scroll})
    }
}