import React from 'react'
import { Navbar, Container, Form, Button, Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate()
  return (
    <Navbar bg="black" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img width={100} src='https://ak.picdn.net/shutterstock/videos/1089898673/thumb/10.jpg?ip=x480'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={()=>{
                navigate('/')
            }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{
                navigate('/movies')
            }}>Movies</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
