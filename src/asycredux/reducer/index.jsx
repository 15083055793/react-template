import {
    RECEIVE_DATA,REQUEST_DATA
} from '../action'
import {INCREMENT ,UNINCREMENT} from "../action";

export function number1(state = 0,action) {
    switch (action.type){
        case INCREMENT:
            return state + action.num;
        case UNINCREMENT:
            return state - action.num;
        default:
            return state
    }
}



function posts(state = {}, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return Object.assign({}, state, {
            })
        case RECEIVE_DATA:
            return Object.assign({}, state,
                action.data
            )
        default:
            return state
    }
}

export function data(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA:
        case REQUEST_DATA:
            return Object.assign({}, state, posts(state.data,action))
        default:
            return state
    }
}

/*
const rootReducer = combineReducers({
    postsBySubreddit,
    selectedsubreddit
})

export default rootReducer*/
