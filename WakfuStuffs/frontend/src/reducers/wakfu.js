const initialState = []

export default function board(state=initialState, action) {
    switch(action.type){
        case "FETCH_STUFFS":
            return [...state, ...action.stuffs];
        default:
            return state
    }
}