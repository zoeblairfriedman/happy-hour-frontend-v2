import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxOption, ComboboxPopover} from "@reach/combobox"
import "@reach/combobox/styles.css";
import {useDispatch} from 'react-redux'
import React from 'react'
import setLocation from '../actions/setLocation'



function Search({panTo}){
    // these are deconstructed variables from what we return from the usePlacesAutcomplete hook
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        //this is a hook that we are going to pass options into, it's going to prefer options near new york. it wants a function
        requestOptions: {
            location: {lat: () => 40.7128, lng: () => -73.935242}
        ,
        radius: 200 * 1000}
    })

const dispatch = useDispatch()

    return (
    <div className="search">
        <Combobox onSelect={async (address) => {
            // perhaps this second argument in setValue could make this work easier with googleAPI. pelase investigate
            setValue(address, false)
            clearSuggestions()
            try {
                const results = await getGeocode({address})
                const { lat, lng } = await getLatLng(results[0])
                panTo({lat, lng})
                dispatch(setLocation({lat, lng}))    
            } catch(error) {
                console.log(error)
            }
        }}>
                <ComboboxInput 
                value={value} 
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                disabled={!ready}
                placeholder="Where are we drinking?"
                />
        <ComboboxPopover>
            {status === "OK" && data.map(({description})=>
            <ComboboxOption key={Math.random() * (100 - 1) + 1} value={description}/>
            )}
        </ComboboxPopover>
        </Combobox>
    </div>
    )
}

export default Search