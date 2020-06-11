import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { SocialIcon } from 'react-social-icons';


// File imports ######
import Projects from './Projects.js';
import Photography from './Photography.js';
// import { Router, Route, Switch } from "react-router";
import {

  Switch,
  Route,
  Link
} from "react-router-dom";
export default class Main extends React.Component {


  constructor(){
    super()
    this.state = {
      show: false
    }
  }


  handleClose = () => {
    this.setState({show:false});
  }
  // const handleShow = () => setShow(true);
  handleShow = () =>{
     this.setState({show:true});

  }
  render(){




    return(
      <Container className='p-3' id="particle-container">
        {/* <Jumbotron>
          <h1 className='header'>Full-Stack Web Developer, Physicist, Photographer and Musician</h1>


        </Jumbotron> */}
        {/* {particles} */}


          <Row>
            <Col >
              <h3 className='header'>Jack Parker
                <SocialIcon className='icons' url="https://www.instagram.com/jack_p1996/"/>
                <SocialIcon className='icons' url="https://github.com/Jp1200"/>
                <SocialIcon className='icons' url="https://www.linkedin.com/in/jack-parker-473523183/"/>
                <SocialIcon className='icons' url="https://neighborhood-farmer-market.herokuapp.com/"/>
              </h3>
              <h3 className='page-wrapper'>Full-Stack Web Developer, Physicist, Photographer and Musician</h3>
            </Col>



            <Col align='end'>
              {/* <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Projects</Breadcrumb.Item>
                <Breadcrumb.Item>Photography</Breadcrumb.Item>
                <Breadcrumb.Item>Physics</Breadcrumb.Item>
              </Breadcrumb> */}
              <ButtonGroup aria-label="Links" size='lg'>
                <Button className="button-header" variant="outline-light"><Link className="link" to="/">Home</Link></Button>
                <Button className="button-header"  variant="outline-light"><Link className="link" to="/projects">Projects</Link></Button>
                <Button className="button-header"  variant="outline-light"><Link className="link" to='/photography'>Photography</Link></Button>
                <Button className="button-header"  variant="outline-light"><Link className="link" to='/physics'>Physics</Link></Button>
              </ButtonGroup>
            </Col>

          </Row>

          <Modal show={this.state.show} onHide={this.handleClose}>

            <Image  width={805} height={1025} src={require('./resume.png')}/>

          </Modal>
        <Row>
          <Switch>
            {/* Imports for different subjects */}
            <Route exact path='/'>



              <Container fluid>
                <br/>
                <h2 align='center' className='resume-modal'>Resumé</h2>
                <Row>


                  <br/>
                  <br/>
                  <br/>

                  <br/>
                  <Media
                    className='media'>
                    <Image

                      onClick={this.handleShow}
                      src={require('./resume.png')}

                      width={805/4}
                      height={1025/4}
                      />
                  </Media>
                </Row>
              </Container>
            </Route>
            <Route exact path='/projects'>
              <Projects/>
            </Route>
            <Route exact path='/photography'>

              <Photography/>
            </Route>
            <Route exact path='/physics'>

            </Route>

          </Switch>
        </Row>


      </Container>

    )
  }



}
