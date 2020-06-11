import React from 'react';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import Modal from 'react-bootstrap/Modal';

export default class Photography extends React.Component{


  render(){
    return (

      <Container fluid >

        <p className='card-desc'>Sample images from my Instagram account. Taken on large format film.
        </p>
        <Row className='photo-container'>

              <Col>
                <Card className='card'>
                  <Card.Img src={require('./Resource/IG420.jpg')}/>

                </Card>
              </Col>
              <Col>
                <Card className='card'>
                  <Card.Img  src={require('./Resource/IG421.jpg')}/>
                </Card>
              </Col>

              {/* <Col>
                <Card className='card'>
                  <Card.Img  src={require('./Resource/Justice3-2.jpg')}/>
                </Card>
              </Col> */}



        </Row>
        <Row >
          <p className='card-desc'>

            "To me, photography is the simultaneous recognition, in a fraction of a second, of the significance of an event."

            - Henri Cartier-Bresson
          </p>
        </Row>
      </Container>
    )
  }
}
