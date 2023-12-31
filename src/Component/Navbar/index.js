import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../Images/logo.png'
import axios from 'axios';
const Index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/todos');
  }, []);
    return (
        <div>
           {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
                </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Features
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/faculty">Faculty</Nav.Link>
                  <NavDropdown
                    title="Courses"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/upsc_courses">UPSC</NavDropdown.Item>
                    <NavDropdown.Item href="/ssc_courses">
                      SSC
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/delhi_courses">
                      Delhi Police
                    </NavDropdown.Item>
                    
                  </NavDropdown>
                  <Nav.Link href="/faculty">Add Cart</Nav.Link>
                  
                  <Button href="/login" variant="success">Login/Sign up</Button>{' '}
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
           
        </div>
    )
}

export default Index