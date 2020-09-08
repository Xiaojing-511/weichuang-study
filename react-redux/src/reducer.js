// 来处理action
import { combineReducers } from "redux"
const count = (state = 0, action) => {
    switch (action.type) {
        case 'COUNT_ADD':
            return state + 1;
        case 'COUNT_MINUS':
            return state - 1;
        default:
            return state;
    }
}

const str = (state = 'la', action) => {
    switch (action.type) {
        case 'ADD_STR':
            return state + action.str;
        default:
            return state;
    }
}

const reducer = combineReducers({
    count,
    str
})
export default reducer