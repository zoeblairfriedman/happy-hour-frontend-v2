import React from 'react';
import { useSelector } from 'react-redux'
import  { useState } from "react";
import {CardColumns, Card, Button, Modal, Container} from 'react-bootstrap'
import BarInput from './BarInput'
import BarEdit from './BarEdit'

function GoogleBarsCards(){

const googleBars = useSelector(state => state.googleBars)
const bars = useSelector(state => state.bars)

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const [selected, setSelected] = useState()

let modalBody;
if (!!selected && !!returnBar(selected)) {
  modalBody = <BarEdit bar={returnBar(selected)} handleClose={handleClose}/>;
} else if (!!selected) {
  modalBody = <BarInput bar={selected} handleClose={handleClose}/>;
} else {
  modalBody = <p>No bar selected</p>;
}


const handleShow = function(bar) {
  setShow(true)
  setSelected(bar)
}


function returnBar(bar){
  return bars.find(b => b.placeId === bar.place_id)
}

    return (
      <>
        <CardColumns>
             {googleBars.map(b => 
            <Card>
            <Card.Body>
              <Card.Title>{b.name}</Card.Title>
              <Card.Text>
              {b.vicinity}
              </Card.Text>
              {!returnBar(b) ? <Button variant="primary text-white" onClick={() => handleShow(b)}>
                Add Details
                </Button> : <Button variant="secondary text-white" onClick={() => handleShow(b)}>
                  Verify or Edit
                  </Button>}   
            </Card.Body>
          </Card>
            )}
        </CardColumns>
            
       
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-success">
          {!!selected ? <Modal.Title className="text-white">{selected.name}</Modal.Title> : <Modal.Title>No Bar Selected</Modal.Title>}
          <button onClick={() => handleClose()} className="btn btn-warning">Close</button>
        </Modal.Header>
        <Modal.Body className="text-white">
          <div className="modalBody">
            {modalBody}
          </div>
        </Modal.Body>
      </Modal>

      
       

      </>
    )
}

export default GoogleBarsCards;