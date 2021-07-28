import React from 'react';
import { useSelector } from 'react-redux'
import {CardColumns, Card, Button} from 'react-bootstrap'

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
              {!returnBar(b) ? <Button variant="primary">
                Add Happy Hour Information!
                </Button> : <Button variant="secondary">
                  Verify or Edit Happy Hour Deets!
                  </Button>}   
            </Card.Body>
          </Card>
            )}
        </CardColumns>
    )
}

export default GoogleBarsCards;