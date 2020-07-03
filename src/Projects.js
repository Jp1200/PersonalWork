import React from "react";
import Link from "react-router-dom";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

export default class Projects extends React.Component {
  render() {
    return (
      <Container>
        <br></br>
        <h1 className="physics-heading" align="center">
          Projects I've worked on:
        </h1>
        <br></br>
        <Row align="center">
          <Col className="col-xs-6">
            <a href="https://neighborhood-farmer-market.herokuapp.com/">
              <Image
                className="imageX"
                src={require("./Resource/HomeGrown.png")}
                thumbnail
              ></Image>
            </a>

            <p className="about">
              HomeGrown Foods, App for neighbors to trade produce
            </p>
          </Col>
          <Col className="col-xs-6">
            <a href="https://neighborhood-farmer-market.herokuapp.com/">
              <Image
                className="imageX"
                src={require("./Resource/HomeGrown.png")}
                thumbnail
              ></Image>
            </a>

            <p className="about">Kareoji, karaoke but with emojis</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
