import React, { useState } from 'react';
// import { fetchGoogleBars } from '../actions/fetchGoogleBars'
// import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
// import GoogleBar from './GoogleBar'
// import BarInput from './BarInput'
// import BarEdit from './BarEdit'
// import {ListGroup} from 'react-bootstrap';
// import {ListGroupItem} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';



function Contribute() {

const location = useSelector(state => state.location)

if (!!location.lat){
    return (
        <div>
            We have a location
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


