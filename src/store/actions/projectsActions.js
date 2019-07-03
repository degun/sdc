import axios from 'axios';

export const getProjects = () => {
    return dispatch => {
        axios.get("http://46.101.140.145:1337/projects").then(res => {
            dispatch({type: "GET_PROJECTS", data: res.data})
        })
    }
}

export const getTableOfProjects = () => {
    return dispatch => {
        axios.get("http://46.101.140.145:1337/table2s").then(res => {
            let data = res.data.filter(d => d._id === "5d13341f3d9f7e3c6f4dfd35")[0]
            dispatch({type: "GET_TABLE_OF_PROJECTS", data})
        })
    }
}

export const setFilter = filter => {
    return dispatch => {
        dispatch({type: "SET_FILTER", filter})
    }
}