import * as types from "../constants/ActionTypes";

const initialState = {
    stuffs: [],
    cpt: 0,
    page: 1,
    size_page: 50,
    total: 0,
    myFilter: '&',
}

export default function wakfu(state=initialState, action) {
    switch(action.type){
        case types.FETCH_STUFFS:
            return {
                ...state,
            stuffs: action.stuffs
            }
        case types.FETCH_STUFFS_LIMITS:
            return {
                ...state,
            stuffs: action.stuffs.results,
            total: action.stuffs.count
            }
        case types.CHANGE_PAGE:
            return {
                ...state,
            page: action.value
            }
        case types.CHANGE_FILTER:
            return {
                ...state,
            myFilter: action.value
            }

        default:
            return state
    }
}

