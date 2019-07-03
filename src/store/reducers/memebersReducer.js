const defaultState = {
    members: []
}

const memebersReducer = (state = defaultState, action) => {
    switch(action.type){
        case "GET_MEMBERS": return {...state, members: action.data}
        default: return state
    }
}

export default memebersReducer;