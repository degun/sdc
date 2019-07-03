import axios from 'axios';

export const getMembers = () => {
    return dispatch => {
        axios.get("http://46.101.140.145:1337/members").then(res => {
            dispatch({type: "GET_MEMBERS", data: res.data})
        })
    }
}