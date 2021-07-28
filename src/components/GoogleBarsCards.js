import React from 'react';
import { useSelector } from 'react-redux'
import {CardColumns, Card} from 'react-bootstrap'

function GoogleBarsCards(){

const googleBars = useSelector(state => state.googleBars)
const bars = useSelector(state => state.bars)

function returnBar(bar){
  return bars.find(b => b.placeId === bar.place_id)
}

    return (
        <CardColumns>
             {googleBars.map(b => 
            <Card>
            <Card.Body>
              <Card.Title>{b.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Other info here?</Card.Subtitle>
              <Card.Text>
              {b.vicinity}
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              {!!returnBar(b) ? <p>Yes</p> : <p>No</p>}   
            </Card.Body>
          </Card>
            )}
        </CardColumns>
    )
}

export default GoogleBarsCards;