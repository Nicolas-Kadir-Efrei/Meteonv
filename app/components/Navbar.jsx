import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Card from './Card';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-between align-items-center">
          <h8 className="text-white mb-0 me-2">METEO KADIR CIFTCI</h8> {/* Reduced margin with me-2 */}
          <Navbar.Brand href="Home" className="mb-0">Accueil</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
