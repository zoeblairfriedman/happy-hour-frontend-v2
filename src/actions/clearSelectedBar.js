export function clearSelectedBar(){
    return (dispatch) => {
        dispatch({
            type: "CLEAR_SELECTED",
        })
    }
    }