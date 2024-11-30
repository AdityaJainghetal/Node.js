import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Registration from './../pages/Registration';
import { Link } from 'react-router-dom';


const TopMenu=()=>{

    return(
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Login System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="Registration">Registration</Nav.Link>
        
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default TopMenu;