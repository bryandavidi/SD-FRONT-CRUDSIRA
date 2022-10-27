import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarHome (){
    return(
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Estudiantes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/1.1">Mostrar estudiantes</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Crear estudiante</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Materias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/2.1">Mostrar materias</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">Crear materia</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Inscripciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mostrar Inscripciones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Generar Inscripcion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#salir">Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBarHome;