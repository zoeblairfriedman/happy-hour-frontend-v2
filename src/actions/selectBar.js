export function selectBar(bar){
    return (dispatch) => {
        dispatch({
            type: "SELECT_BAR",
            payload: bar
        })
    }
    }