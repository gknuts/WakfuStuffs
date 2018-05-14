const initialState = {
    stuffs: [],
    cpt: 0,
}

export default function wakfu(state=initialState, action) {
    switch(action.type){
        case "FETCH_STUFFS":
            return {
                ...state,
            stuffs: action.stuffs
            }
        default:
            return state
    }
}

