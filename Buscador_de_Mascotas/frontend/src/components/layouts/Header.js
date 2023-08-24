import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
  return (
    <header>
      <Navbar data-bs-theme="dark" className="navbar navbar-expand-md navbar-dark shadow-sm" style={{ backgroundColor: '#1a0a3e' }}>
        <Container>
          <img src="img/logo.png" alt="Buscador de Mascotas" className="rounded-circle" width="55" height="55" />
          <Navbar.Brand href="#">Buscador de Mascotas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/perdidos">Perdidos</Nav.Link>
            <Nav.Link href="/consejos">Consejos</Nav.Link>
            <Nav.Link href="/novedades">Novedades</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header> 
  )
}

export default Header;