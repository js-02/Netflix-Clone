import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavbarMian() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Movies App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              < br/>
              <Nav.Link href="/favlist">Fav Movie</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}