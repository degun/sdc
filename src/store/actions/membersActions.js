import axios from 'axios';

export const getMembers = () => {
    return dispatch => {
        axios.get("https://admin.sdc.com.al/members").then(res => {
            dispatch({type: "GET_MEMBERS", data: res.data})
        })
    }
}