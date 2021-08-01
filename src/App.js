
import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MapContainer from './containers/MapContainer'
import Contribute from './components/Contribute'
import Logo from "./components/Logo"


class App extends React.Component {


  render () {

    return (
      <>
      <Row>
        <Col className="col-lg-2" id="logoSection">
          <Logo/>
        </Col>
        <Col className="col-lg-10">
          <Container className="border border-primary rounded mt-3 pb-4">
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
            </Container>
        </Col>
      </Row>
      </>
    )
  }
}

export default App;
