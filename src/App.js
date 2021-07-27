
import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MapContainer from './containers/MapContainer'


class App extends React.Component {


  render () {

    return (
      <Container>
        <Row>
          <Col>Bar list here</Col>
          <Col>
            <MapContainer/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
