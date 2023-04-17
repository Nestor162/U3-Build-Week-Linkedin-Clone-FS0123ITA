import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  NavLink,
  Navbar,
  Row,
} from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="px-5 ">
        <Container className="d-flex px-5">
          <Navbar.Brand href="#">logo</Navbar.Brand>
          <Navbar.Toggle className="ms-auto" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Col xs={2}>
              <Form className="d-flex bg-light">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Col>
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Rete</Nav.Link>
              <Nav.Link href="#action2">Lavoro</Nav.Link>
              <Nav.Link href="#action2">Messaggistica</Nav.Link>
              <Nav.Link href="#action2">Notifiche</Nav.Link>
              <NavDropdown
                className="border-end"
                title="Tu"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Lavoro</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Messaggistica
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Notifiche</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Lavoro" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Lavoro</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Messaggistica
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Notifiche</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-decoration-underline">
                Prova Premium gratis
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
};

export default MyNav;
