import React from 'react'
import { Container, Nav, Navbar , Form, Badge } from 'react-bootstrap'

import './css/clientNavigationBar.css'

import mrFoodLogo from '../images/mrFoodLogo.jpeg'
import profile from '../images/profile.png'
import bag from '../images/bag.png'
import search from '../images/search.png'
import call from '../images/call.png'


function clientNavigationBar() {
    const itemCount = 3;
  return (
      <div style={{ background: 'linear-gradient(to right, rgb(237, 58, 58), rgb(247, 124, 124))' }} className='sticky-top'>
          <Navbar className='container' variant="dark">
            <Container>
                <Navbar.Brand href="/home">
                    <img src={mrFoodLogo} alt="Logo" style={{ width: '60px' }} />
                </Navbar.Brand>
                <Form className="d-flex align-items-center">
                    <Nav className="me-auto">
                        <Nav.Link href="#features" className="text-white">
                            <img src={search} alt="Search" style={{ width: '30px' }} />
                        </Nav.Link>
                        <div className="d-flex align-items-center ms-3">
                            <img src={call} alt="Call" style={{ width: '30px' }} />
                            <div className="text-right ms-2">
                                <div className="font-weight-bold text-white" style={{ fontWeight: 700 }}>Call Us Now</div>
                                <a href="tel:#" className="font-weight-bold text-white text-decoration-none" style={{ fontWeight: 700 }}>0772000206</a>
                            </div>
                        </div>
                        <Nav.Link href="#features" className="text-white ms-3">
                            <img src={profile} alt="Profile" style={{ width: '30px' }} />
                        </Nav.Link>
                        <Nav.Link href="#pricing" className="text-white ms-3">
                            <img src={bag} alt="Bag" style={{ width: '30px' }} />
                            {itemCount > 0 && (
                                <Badge pill bg="danger" className="position-absolute top-10 end-0 translate-middle">
                                    {itemCount}
                                </Badge>
                            )}
                        </Nav.Link>
                    </Nav>
                </Form>
            </Container>
        </Navbar>


      </div>
  )
}

export default clientNavigationBar