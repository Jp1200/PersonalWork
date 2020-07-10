import React from "react";
import Fourier from "./Fourier.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MathJax from "react-mathjax";
function Physics() {
  const fourierA =
    "a_n = \\frac{2}{P}\\int_P s(x)\\cdot \\cos(2\\pi x \\frac{n}{P}) dx";
  const fourierB =
    "b_n = \\frac{2}{P}\\int_P s(x)\\cdot \\sin(2\\pi x \\frac{n}{P}) dx";
  const c = "\\frac{\\sin(n \\theta)}{n \\pi}";
  const series =
    "s_N(x) = \\frac{a_O}{2} + \\sum_{n=1}^{N}(a_n\\cos(2\\pi x \\frac{n}{P}) + b_n\\sin(2\\pi x \\frac{n}{P}))";
  const perturbation = "x_n = \\sum_{n=0}^{N} a_n\\epsilon^n";
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
          <p className="physics-text">
            Periodic functions derived from the summation of sinusoidal
            functions or complex exponential functions. This has many
            applications in physics and engineering. This is a simple annimation
            of the convergence of the Fourier series. Clicking on any of the
            buttons will change the degree of n as represented by this equation.
            The higher the degree the closer the function will represent a
            square function i.e. as N => ∞.{" "}
          </p>
          <MathJax.Provider>
            <MathJax.Node formula={c} className="physics-text">
              {" "}
              Finding the coeffcients is trivial for most s(x).
            </MathJax.Node>
            <MathJax.Node formula={series} className="physics-text" />
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
        <Col className="col-md-6">
          <p className="physics-text">
            Appendices: Part A - Scientiﬁc Concepts (excerpt 1) A particle, such
            as an electron, is contained in one place when it is actualized, but
            it is described as a wave (ﬁeld) when it is uncontained (not
            observed within the consciousness interval of <i>.95 - 1s</i>) as a
            probability. A wave has height amplitude, frequency (as number of
            rotations of an archetypal thought pattern), time/period (which is
            the inversion of the frequency, phase (angle) and wavelength. The
            “wavelength is the shortest distance at which a wave pattern repeats
            itself”.¹
          </p>
        </Col>
        <Col className="col-md-6">
          <Image src={require("./Resource/wave.gif")} thumbnail />
        </Col>
      </Row>
      <Row align="center">
        <Col className="col-md-6">
          <p className="physics-text">
            {" "}
            And, according to Jane Roberts’ Seth, “Concepts [archetypes/numbers]
            ﬁt together in patterns [waves].”² A sinewave (electron) is
            non-periodic when uncontained (i.e., not observed - still in the
            collective unconscious realm of <i>0.8 - 1.25 </i>), but periodic
            (thought patterns as points, i.e., atoms repeating themselves)
            within a boundary system (i.e., out conscious mind operating from
            <i>.95 - 1s</i> intervals). Fourier’s Theorem states that any
            periodic wave can be represented as a unique sum of sinewaves having
            the appropriate amplitude, frequency, and phase. Furthermore, the
            frequencies of the component waves are related in a simple way: they
            are all whole number multiples of a single frequency, which is the
            base (ﬁrst) resonant (interacting) frequency (number of rotations of
            archetypal thought patterns) of an object.
          </p>
        </Col>
        <Col className="col-md-6">
          <p className="physics-text">
            For example, all 17 of our human senses represent the whole number
            multiples of a basic concept (from the unconscious), which we
            subconsciously construct and then observe during our conscious, (
            <i>.95 - 1s </i>) moment. Consequently, what we deem as physical
            objects are all constructed at the subconscious, theta wave level of
            5 - 8 cps and are variations on a theme. 1 Tao of Physics, Capra, p.
            58 2 Unknown Reality, Roberts, p. 667
          </p>
        </Col>
      </Row>
      <Row align="center">
        <h1 className="physics-heading">
          Perturbation Theory and Applications
        </h1>

        <p className="physics-text">
          Perturbation theory was first introduced to me in Quantum mechanics as
          an idea stemming from a way to solve solutions to difficult problems
          regarding particle scattering. However, after watching a few lectures
          on a class called{" "}
          <a href="https://www.youtube.com/watch?v=_Sm7SNlNUOI">
            Mathematical Physics
          </a>
          {", "}
          taught by Carl Bender at Washington University, I've begun to truly
          appreciate the beauty and mutli-use applications Perturbation theory
          brings to the table.
        </p>

        <p className="physics-text">
          Perturbation theory TD;LR is that a difficult problem is comprised of
          many, or in general, infinite tiny problems that are trivially easy to
          solve. In mathematical terms, we assume for any problem there exists a
          tiny 'perturbation', ε (epsilon).
          <MathJax.Provider>
            <MathJax.Node formula={perturbation}></MathJax.Node>
          </MathJax.Provider>
        </p>
      </Row>
    </Container>
  );
}
export default Physics;
