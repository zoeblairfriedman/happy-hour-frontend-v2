
import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MapContainer from './containers/MapContainer'
import Contribute from './components/Contribute'


class App extends React.Component {


  render () {

    return (
      <Container>
        <Row>
          <Col>
          Find a Happy Hour!
            <MapContainer/>
          </Col>
          <Col>Contribute</Col>
        </Row>
      </Container>
    )
  }
}

export default App;
