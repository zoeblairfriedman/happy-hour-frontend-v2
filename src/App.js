
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
        <Row>
          <Col>
            <Container className="ml-2 mr-0">
              <MapContainer/>
            </Container>
          </Col>
          <Col>
            <Container className="my-4 mx-0">
              <Contribute/>
            </Container>
          </Col>
        </Row>
    )
  }
}

export default App;
