import React from 'react';
import { useSelector } from 'react-redux'
import  {useState } from "react";
import {CardColumns, Card, Button, Modal} from 'react-bootstrap'
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
  modalBody = <BarEdit bar={returnBar(selected)}/>;
} else if (!!selected) {
  modalBody = <BarInput bar={selected}/>;
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
              <Card.Subtitle className="mb-2 text-muted">Other info here?</Card.Subtitle>
              <Card.Text>
              {b.vicinity}
              </Card.Text>
              {!returnBar(b) ? <Button variant="primary" onClick={() => handleShow(b)}>
                Add Happy Hour Information!
                </Button> : <Button variant="secondary" onClick={() => handleShow(b)}>
                  Verify or Edit Happy Hour Deets!
                  </Button>}   
            </Card.Body>
          </Card>
            )}
        </CardColumns>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalBody}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </>
    )
}

export default GoogleBarsCards;