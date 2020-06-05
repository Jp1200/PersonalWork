import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

// import { Router, Route, Switch } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class Main extends React.Component {


  render(){

    return(
      <Container className='p-3'>
        {/* <Jumbotron>
          <h1 className='header'>Full-Stack Web Developer, Physicist, Photographer and Musician</h1>


        </Jumbotron> */}
        <Router>
          <Row>
            <Col >
              <h1 className='header'>Full-Stack Web Developer, Physicist, Photographer and Musician</h1>
            </Col>



            <Col align='end'>
              {/* <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Projects</Breadcrumb.Item>
                <Breadcrumb.Item>Photography</Breadcrumb.Item>
                <Breadcrumb.Item>Physics</Breadcrumb.Item>
              </Breadcrumb> */}
              <ButtonGroup aria-label="Links" size='lg'>
                <Button variant="secondary"><Link to="/">Home</Link></Button>
                <Button variant="secondary"><Link to="/projects">Projects</Link></Button>
                <Button variant="secondary"><Link to='/photography'>Photography</Link></Button>
                <Button variant="secondary"><Link to='/physics'>Physics</Link></Button>
              </ButtonGroup>
            </Col>

          </Row>

        <Row>
          <Switch>
            {/* Imports for different subjects */}
            <Route path='projects'>

            </Route>
            <Route path='/photography'>

            </Route>
            <Route path='/physics'>
              
            </Route>

          </Switch>
        </Row>
      </Router>
      </Container>

    )
  }



}
