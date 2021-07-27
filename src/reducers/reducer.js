

export default function reducer(state = {bars: [], googleBars: [], selectedBar: "", location: {}}, action){
    switch(action.type){
        case "FETCH_BARS":
            return {...state, bars: action.payload}
        case "ADD_BAR":
            return {...state, bars: [...state.bars, action.payload]}
        case "GOOGLE_BARS":
            return {...state, googleBars: action.payload}
        case "SELECT_BAR":
            return {...state, selectedBar: action.payload}
        case "EDIT_BAR":
            let newBars = state.bars.map(b => {
                if (b.id === action.payload.id){
                    return action.payload
                } else {
                    return b
                }
            }) 
            return {...state, bars: newBars}
        case "SET_LOCATION":
            return {
                ...state,
                location: action.payload
            }
        case "CLEAR_SELECTED":
            return {
                ...state,
                selectedBar: ""
            }
        default:
            return state
    }
   
}