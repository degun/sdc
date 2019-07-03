const defaultState = {
    scroll: 0
}

const appReducer = (state = defaultState, action) => {
    switch(action.type){
        case "SET_SCROLL_POSITION": return {...state, scroll: action.scroll}
        default: return state
    }
}

export default appReducer;