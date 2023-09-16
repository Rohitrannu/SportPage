import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Spiner from './Spiner';
import {Link} from 'react-router-dom';
import { useState } from 'react';




export default function (props) {
  const [ fix,setFix] = useState(false)
  function setFixed (){
    if (window.scrollY>= 392){
      setFix(true)
    }
     else  {
      setFix(false)
    }
   
  }
  window.addEventListener("scroll",setFixed)
  return (
<>
    <Navbar collapseOnSelect expand="lg" bg="" variant="" className={ fix ?"rounded-2 fixed-top":'navbar'} >
      <Container >
      <Spiner/>
        <Navbar.Brand as={Link} to="/">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/about">{props.about}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{props.contact}</Nav.Link>
            <Nav.Link as={Link} to="/quote">{props.quote}</Nav.Link>
            <Nav.Link as={Link} to="/Mcq">{props.Game}</Nav.Link>
            <Nav.Link as={Link} to="/login">{props.login}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link  ></Nav.Link>
            <Nav.Link  eventKey={2} >

              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Dark Mode"
                />
              </Form>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
     
      
    </Navbar>

    

  </>
  )
}

Navbar.prototype = {
  title: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
  login: PropTypes.string,
  quote: PropTypes.string,
  Game: PropTypes.string,
}
