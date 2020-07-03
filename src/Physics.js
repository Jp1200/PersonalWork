import React from "react";
import Fourier from "./Fourier.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MathJax from "react-mathjax";
function Physics() {
  const fourierA =
    "a_n = \\frac{2}{P}\\int_P s(x)\\cdot \\cos(2\\pi x \\frac{n}{P}) dx";
  const fourierB =
    "b_n = \\frac{2}{P}\\int_P s(x)\\cdot \\sin(2\\pi x \\frac{n}{P}) dx";
  const c = "\\frac{\\sin(n \\theta)}{n \\pi}";
  const series =
    "s_N(x) = \\frac{a_O}{2} + \\sum_{n=1}^{N}(a_n\\cos(2\\pi x \\frac{n}{P}) + b_n\\sin(2\\pi x \\frac{n}{P}))";
  return (
    <Container>
      <Row align="center" className="physics-heading">
        <Col className="col-md-6">
          <h5>Fourier series</h5>
          <h5 className="math">
            <MathJax.Provider>
              <MathJax.Node formula={fourierA} />
              <MathJax.Node formula={fourierB} />
            </MathJax.Provider>
          </h5>
          <p className="physics-text">
            Here listed are the fourier coeffcients used to solve differiential
            equations. Used primarily for approximating equations. Usage
            includes solving the heat equation. P represents the periodicity
            (often set equal to 2π for a full period). s(x) is a real valued
            function that is integrable on length P.
          </p>
        </Col>
        <Col className="col-md-6">
          <MathJax.Provider>
            <p className="physics-text">
              Periodic functions derived from the summation of sinusoidal
              functions or complex exponential functions. This has many
              applications in physics and engineering. This is a simple
              annimation of the convergence of the Fourier series. Clicking on
              any of the buttons will change the degree of n as represented by
              this equation. The higher the degree the closer the function will
              represent a square function i.e. as N => ∞.{" "}
              <MathJax.Node formula={c} /> Finding the coeffcients is trivial
              for most s(x).
              <MathJax.Node formula={series} />
            </p>
          </MathJax.Provider>
        </Col>
      </Row>

      <Row align="center">
        <Col>
          <Fourier />
        </Col>
      </Row>
      <Row align="center">
        <Col>
          <p className="physics-text">
            (fig 1.a) Animation inspired from Wikipedia on Fourier Series.
          </p>
        </Col>
      </Row>
      <Row align="center">
        <h1 className="physics-heading">
          Perturbation Theory and Applications
        </h1>
        <Col className="col-md-6">
          <p className="physics-text">
            Perturbation theory was first introduced to me in Quantum mechanics
            as an idea stemming from a way to solve solutions to difficult
            problems regarding particle scattering. However, after watching a
            few lectures on a class called
            <br />
            <a href="https://www.youtube.com/watch?v=_Sm7SNlNUOI">
              Mathematical Physics
            </a>{" "}
            &nbsp; taught by Carl Bender at Washington University, I've begun to
            truly appreciate the beauty and mutli-use applications Perturbation
            theory brings to the table.
          </p>

          <p className="physics-text">
            Perturbation theory TD;LR is that a difficult problem is comprised
            of many, or in general, infinite tiny problems that are trivially
            easy to solve. In mathematical terms we, assume a problem there
            exists a tiny 'perturbation', ε (epsilon).
          </p>
        </Col>
        <Col className="col-md-6"></Col>
      </Row>
    </Container>
  );
}
export default Physics;
