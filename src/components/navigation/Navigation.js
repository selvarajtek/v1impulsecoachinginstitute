import React from 'react';
import { Navbar,NavDropdown,Nav,Container } from 'react-bootstrap';
import './Navigation.css';
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <section>
      <Navbar collapseOnSelect expand="md" fixed='top' variant='dark' className='nav-container'>
        <Container fluid>
        <Navbar.Brand className='brand-nav-head'><img alt='' src='/LOGO.png' width='60' height='60' className='logo-img'/><p className='brand-name'>IMPULSE</p></Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-toggle">
            <Nav.Link href="#"><NavLink className='nav-link'  to="/home">Home {'   '}</NavLink></Nav.Link>
            <Nav.Link href="#"><NavLink className='nav-link' to="/tnpsc">TNPSC {'   '}</NavLink></Nav.Link>
            <Nav.Link href="#"><NavLink className='nav-link' to="/upsc">UPSC {'   '}</NavLink></Nav.Link>
            <Nav.Link href="#"><NavLink className='nav-link' to="/sscandbanking">SSC & Banking {'   '}</NavLink></Nav.Link>
            {/* <NavDropdown className='nav-link' title="Test Series" id="collasible-nav-dropdown" href="#test">
              <NavDropdown.Item href="">TNPSC</NavDropdown.Item>
              <NavDropdown.Item href="">UPSC</NavDropdown.Item>  
            </NavDropdown>
            <NavDropdown className='nav-link' title="Current Affairs" id="collasible-nav-dropdown" href="#test">
              <NavDropdown.Item><NavLink className='nav-link-dropdown' to="/currentaffairs/tnpsc">TNPSC</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className='nav-link-dropdown' to="/currentaffairs/upsc">UPSC</NavLink></NavDropdown.Item>  
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="joiningimpulse">Joining Impulse</Nav.Link> */}
            {/* <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        
        </Container>
        
      </Navbar>
    </section>
  )
}

export default Navigation