import axios from 'axios'
export const REQUEST_DATA = 'REQUEST_DATA'


export const INCREMENT = 'INCREMENT';
export const UNINCREMENT = 'UNINCREMENT';

export function increment(num) {
    return {
        type: INCREMENT,
        num
    }
}

export function unIncrement(num) {
    return {
        type: UNINCREMENT,
        num
    }
}

export function requestPosts(url) {
    return {
        type: REQUEST_DATA,
        url,
    }
}



export const RECEIVE_DATA = 'RECEIVE_DATA'


function receivePosts(json, success) {
    return {
        type: RECEIVE_DATA,
        data: JSON.parse(json),
    }
}
export const getList = url => dispatch => {
    dispatch(requestPosts(url))
    return axios.get(url)
        .then(response => JSON.stringify(response))
        .then(json => dispatch(receivePosts(json)))
}
// export function getList(url,success) {
//     return dispatch => {
//         dispatch(requestPosts(url))
//         return axios.get(url)
//             .then(response => JSON.stringify(response))
//             .then(json => dispatch(receivePosts(json)))
//     }
// }

