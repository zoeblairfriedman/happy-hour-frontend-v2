

export function fetchGoogleBars(lat, lng){
    return (dispatch) => {
        fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&types=bar&keyword=happyhour&key=AIzaSyBEBEXXRvP5A3JAuZ2hL2Z2ShMPxzWeMxQ`)
        .then(r => r.json())
        .then(bars => dispatch({
            type: "GOOGLE_BARS", 
            payload: bars.results
        }))
    }
    
    }
    