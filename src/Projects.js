import React from "react";
// import Link from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
// import Modal from "react-bootstrap/Modal";

export default class Projects extends React.Component {
  render() {
    return (
      <Container>
        <br></br>
        <h1 className="physics-heading" align="center">
          Projects I've worked on:
        </h1>
        <p className="about">
          I've recently undergone working collaboritvely on open source projects
          like <a href="https://coronatrackerbeta.com/">CoronaTracker</a>
        </p>

        <Row align="center">
          <Col className="col-xs-4">
            <a href="https://neighborhood-farmer-market.herokuapp.com/">
              <Image
                height="400px"
                width="400px"
                align="center"
                className="imageX"
                src={require("./Resource/HomeGrown.png")}
                thumbnail
              ></Image>
            </a>

            <p className="about">
              HomeGrown Foods, App for neighbors to trade produce. Heroku Server
              host is slow(refreshing and clicking again will fix it)
            </p>
          </Col>
          <Col className="col-xs-4">
            <a href="https://github.com/Jp1200/kareoji">
              <Image
                height="400px"
                width="400px"
                align="center"
                className="imageX"
                src={require("./Resource/kareoji.png")}
                thumbnail
              ></Image>
            </a>

            <p className="about">Kareoji, karaoke but with emojis</p>
          </Col>
          <Col className="col-xs-4">
            <a href="https://github.com/Jp1200/Jp1200-ShowsInZip">
              <Image
                height="400px"
                width="400px"
                align="center"
                className="imageX"
                src={require("./Resource/VroFi.png")}
                thumbnail
              ></Image>
            </a>

            <p className="about">
              VroFi, Venue/show finder for your zip code allows to preview band
              music before going to show
            </p>
          </Col>
        </Row>
        <Row align="center"></Row>
      </Container>
    );
  }
}
