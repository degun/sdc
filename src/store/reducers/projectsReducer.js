const defaultState = {
    projects: [],
    filter: "supervision",
    selected: {}
}

const projectsReducer = (state = defaultState, action) => {
    switch(action.type){
        case "GET_PROJECTS": return {...state, projects: action.data};
        case "GET_TABLE_OF_PROJECTS": return {...state, table: action.data};
        case "SET_FILTER": return {...state, filter: action.filter}
        case "SELECT_PROJECT": return {...state, selected: action.selected}
        default: return state
    }
}

export default projectsReducer;