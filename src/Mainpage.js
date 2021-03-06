import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import { SocialIcon } from "react-social-icons";

// File imports ######
import Projects from "./Projects.js";
import Photography from "./Photography.js";
import Physics from "./Physics.js";
// import { Router, Route, Switch } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      width: window.innerWidth,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  // const handleShow = () => setShow(true);
  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <Container fluid className="mainpage">
        <Row className="row">
          <Col className="link-to">
            <h3 className="header text-center">
              Jack Parker
              <SocialIcon
                className="icons"
                url="https://www.instagram.com/jack_p1996/"
              />
              <SocialIcon className="icons" url="https://github.com/Jp1200" />
              <SocialIcon
                className="icons"
                url="https://www.linkedin.com/in/jack-parker-473523183/"
              />
              <SocialIcon
                className="icons"
                url="https://neighborhood-farmer-market.herokuapp.com/"
              />
            </h3>
          </Col>
          {/* Button Links to other pages */}
          <Col className="buttonTitle">
            <ButtonGroup aria-label="Links" size="lg">
              <Button className="button-header" variant="outline-light">
                <Link className="link" to="/">
                  Home
                </Link>
              </Button>
              <Button className="button-header" variant="outline-light">
                <Link className="link" to="/projects">
                  Projects
                </Link>
              </Button>
              <Button className="button-header" variant="outline-light">
                <Link className="link" to="/photography">
                  Photography
                </Link>
              </Button>
              <Button className="button-header" variant="outline-light">
                <Link className="link" to="/physics">
                  Blog
                </Link>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <h3 align="center" className="page-wrapper">
          Full-Stack Web Developer, Physicist, Photographer and Musician
        </h3>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Image
            className="img-fluid"
            src={require("./Resource/resume_jp.png")}
          />
        </Modal>

        <Row>
          <Switch>
            {/* Imports for different subjects */}
            <Route exact path="/">
              <Container>
                <br />
                <h2 align="center" className="resume-modal">
                  Resumé
                </h2>
                <Row className="row">
                  <br />
                  <br />
                  <br />

                  <br />
                  <Media className="media">
                    <Image
                      onClick={this.handleShow}
                      src={require("./Resource/resume_jp.png")}
                      width={805 / 4}
                      height={1025 / 4}
                    />
                  </Media>
                </Row>
                <Row>
                  <Col className="projects-col">
                    <h1 className="about-h1">About me ---></h1>
                    <p className="about">
                      I graduated from Trinity University with a B.S. in physics
                      and a minor in mathematics. I have many hobbies which
                      include photography, playing piano and guitar. I love
                      learning and pursing knowledge I find interesting. This
                      website was designed to look empty and barren as I wish to
                      add more and more to it over time. The sky might be the
                      limit, however, space is limitless. Using ReactJS and
                      BootStrap-ReactJS and implementing SCSS to create the
                      background. Mobile view is atrocious, currently working on
                      improving it.
                    </p>
                  </Col>
                </Row>
              </Container>
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/photography">
              <Photography />
            </Route>
            <Route exact path="/physics">
              <Physics />
            </Route>
          </Switch>
        </Row>
      </Container>
    );
  }
}
