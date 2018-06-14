import {ACTIVE_INDEX} from "../action/goods";

export function activeIndex(state = 0,action) {
    switch (action.type){
        case ACTIVE_INDEX:
            return action.index;
        default:
            return state;
    }
}