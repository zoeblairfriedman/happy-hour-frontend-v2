export function fetchBarsBackend(){
return (dispatch) => {
    fetch('http://localhost:3000/bars')
  .then(r => r.json())
  .then(bars => dispatch({
      type: "FETCH_BARS", 
      payload: bars
  })
  )
}
}

