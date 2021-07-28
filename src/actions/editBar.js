export const editBar = (formData) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/bars/${formData.id}`, {
            method: "PATCH",
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(bar => {
            if (!!bar.id) {
            dispatch({type: "EDIT_BAR", payload: bar})
            } else {
                window.alert(bar[0])
            }})
            .catch(() => alert("Apologies, there is an issue with the server. Please try again later."))
    }
}