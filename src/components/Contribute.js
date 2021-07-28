import React, { useState } from 'react';
import { fetchGoogleBars } from '../actions/fetchGoogleBars'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import GoogleBar from './GoogleBar'
import BarInput from './BarInput'
import BarEdit from './BarEdit'

function Contribute() {

    const [selected, setSelected] = useState()
    const location = useSelector(state => state.location)
    const googleBars = useSelector(state => state.googleBars)
    const bars = useSelector(state => state.bars)

    function handleClick(bar){
        setSelected(bar)
    }

    function returnBar(bar){
        return bars.find(b => b.placeId === bar.place_id)
    }
    
    const dispatch = useDispatch()

    const searchBars = () => {
        const lat = location.lat
        const lng = location.lng
        dispatch(fetchGoogleBars(lat, lng))
    }


       if (!selected) {
        return (
            <div className="barList" >
            {!!location.lat ? <button onClick={() => {searchBars()}}>Search Area</button> : <p>Specify a location to search</p>}
            {googleBars.map(b => 
            <div key={b.place_id} onClick={()=> handleClick(b)}>
            <GoogleBar key={b.place_id} bar={b}/>
            </div>
            )}
            
            </div>
        )} else {
            return(
                <div>
                    {!!returnBar(selected) ? <BarEdit bar={returnBar(selected)}/> : <BarInput bar={selected}/>}    
                </div>
            )
        }
    
    
}

export default Contribute;


