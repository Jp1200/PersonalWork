import React from 'react';
import Fourier from './Fourier.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Latex from 'react-latex';
function Physics()  {
  return(
    <Container className='physics'>
      <Row className='physics-heading'>
        <Col>
          <h5>Fourier series</h5>
          <h5>
            <Latex >
              $(3\times 4) \div (5-3)$
            </Latex>
          </h5>
        </Col>
        <Col>
          <p className='about'>
            Periodic functions derived from the summation of sinusoidal functions or complex exponential functions. This has many
            applications in physics and engineering. This is a simple annimation of the convergence of the Fourier series.
            Clicking on any of the buttons will change the degree of n as represented by this equation. The higher the degree the closer
            the function will represent a square function i.e. as n => ∞.

          </p>
        </Col>
      </Row>

      <Row >
        <Col>
          <Fourier/>
        </Col>


      </Row>
    </Container>
  )

}
export default Physics;
