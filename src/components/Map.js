import React, {useState} from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api"
import mapStyles from '../mapStyles'
import "@reach/combobox/styles.css";
import Search from './Search'
import {useDispatch} from 'react-redux'
import {selectBar} from '../actions/selectBar'
import {clearSelectedBar} from '../actions/clearSelectedBar'


//separating this out keeps react from rerendering unnecessarily
const libraries = ["places"];

//these are all the props for the Google Maps component
const mapContainerStyle = {width: "50vw", height: "80vh"}
const center = {lat: 40.745312, lng: -73.99600}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

export default function Map(props){

    //this is my state for my selected bars, starting as null, getting value when clicked
    const [selectedBar, setSelectedBar] = useState(null);
    // I need to dispatch the selectedBar to the store for other components to use
    const dispatch = useDispatch()
    // this is from google maps API that loads the libraries from google
    const { isLoaded, loadError } = useLoadScript ({
    googleMapsApiKey: "AIzaSyBEBEXXRvP5A3JAuZ2hL2Z2ShMPxzWeMxQ",
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, <-- can't get this to work
    libraries
    })

    //
    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
        }, []) 

    //saves a ref to the map instance to help move where the map is. You use ref when you don't want things to rerender.
    const mapRef = React.useRef();
    //gives us the map that we can assign to use later without causing rerenders
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, [])

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

  
    return( 

    <div>
        <Search panTo={panTo}/>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12.7} center={center} options={options} onLoad={onMapLoad}>
        {props.bars.map(b => (
            <Marker key={b.id} position={{
                lat: parseFloat(b.lat),
                lng: parseFloat(b.lng)
            }} 
            onClick={() => {
                setSelectedBar(b)
                dispatch(selectBar(b))
            }}
            icon={{
                url: "/tropical.png",
                scaledSize: new window.google.maps.Size(25,25)
            }}/>
        )
        )}

        {selectedBar && (
            <>
            <InfoWindow position={{
                lat: parseFloat(selectedBar.lat),
                lng: parseFloat(selectedBar.lng)
            }} onCloseClick={()=> {
                setSelectedBar(null)
                dispatch(clearSelectedBar())
            }}>
                <div>
                    <h3>{selectedBar.name}</h3>
                    <h6>Verified: {selectedBar.formattedVerified}</h6>
                    <h6>Happy Days: {selectedBar.dateArray}</h6>
                    <h6>Start: {selectedBar.formattedStart}</h6>
                    <h6>End: {selectedBar.formattedEnd}</h6>
                    <h6>Deals: {selectedBar.details}</h6>
                </div>
                </InfoWindow> 
           
            </>
        )} 
       
        </GoogleMap>
    </div>
   
    )
}
