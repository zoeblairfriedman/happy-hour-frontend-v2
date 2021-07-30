import React, { useState } from 'react';
import { fetchGoogleBars } from '../actions/fetchGoogleBars'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import {Alert} from 'react-bootstrap';
import GoogleBarsCards from '../components/GoogleBarsCards'



function Contribute() {

const location = useSelector(state => state.location)
const dispatch = useDispatch()
const searchBars = () => {
    const lat = location.lat
    const lng = location.lng
    dispatch(fetchGoogleBars(lat, lng))
}


if (!!location.lat){
    searchBars()
    return (
        <div>
            <GoogleBarsCards/>
        </div>
    )
    } else {
        return (
            <Alert variant="success">
            <Alert.Heading>Looking for a Happy Hour?</Alert.Heading>
            <p>
              Happy Hours verified by users show up as Tropical Drinks on our map!
            </p>
            <hr />
            <Alert.Heading>Ready to Contribute?</Alert.Heading>
            <p className="mb-0">
              Search by bar name or location so you can add the Happy Hour to our database or update outdated information!
            </p>
          </Alert>
        )
    }

       
}

export default Contribute;


