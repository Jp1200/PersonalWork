import React from 'react';
import Fourier from './Fourier.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Physics()  {
  return(
    <Container className='physics'>
      <Row align='center'>
        <Fourier/>

      </Row>
    </Container>
  )

}
export default Physics;
