import React from 'react';
import Fourier from './Fourier.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MathJax from 'react-mathjax';
function Physics()  {
  const fourierA = 'a_n = \\frac{2}{P}\\int_P s(x)\\cdot \\cos(2\\pi x \\frac{n}{P}) dx';
  const fourierB = 'b_n = \\frac{2}{P}\\int_P s(x)\\cdot \\sin(2\\pi x \\frac{n}{P}) dx';
  const c = '\\frac{\\sin(n \\theta)}{n \\pi}';
  const series = 's_N(x) = \\frac{a_O}{2} + \\sum_{n=1}^{N}(a_n\\cos(2\\pi x \\frac{n}{P}) + b_n\\sin(2\\pi x \\frac{n}{P}))';
  return(
    <Container className='physics'>
      <Row className='physics-heading'>
        <Col>
          <h5>Fourier series</h5>
          <h5 className='math'>
            <MathJax.Provider >
              <MathJax.Node formula={fourierA}/>
              <MathJax.Node formula={fourierB}/>
            </MathJax.Provider>
          </h5>
          <p className='physics-text'>
            Here listed are the fourier coeffcients used to solve differiential equations. Used primarily for approximating equations.
            Usage includes solving the heat equation. P represents the periodicity (often set equal to 2π for a full period).
            s(x) is a real valued function that is integrable on length P.

          </p>
        </Col>
        <Col>

          <MathJax.Provider><p className='physics-text'>
            Periodic functions derived from the summation of sinusoidal functions or complex exponential functions. This has many
            applications in physics and engineering. This is a simple annimation of the convergence of the Fourier series.
            Clicking on any of the buttons will change the degree of n as represented by this equation. The higher the degree the closer
            the function will represent a square function i.e. as N => ∞. <MathJax.Node formula={c}/> Finding the coeffcients is trivial for most s(x).
            <MathJax.Node formula={series}/>

          </p></MathJax.Provider>

        </Col>
      </Row>

      <Row >
        <Col>
          <Fourier/>
        </Col>


      </Row>
      <Row>

      </Row>
    </Container>
  )

}
export default Physics;
