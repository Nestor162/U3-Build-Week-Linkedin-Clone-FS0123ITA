import React from "react";

import {
  Col,
  Container,
  Form,
  Dropdown,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import rete from "../assets/rete.svg";
import work from "../assets/work.svg";
import msg from "../assets/msg.svg";
import search from "../assets/search.svg";
import notifiche from "../assets/notifiche.svg";
import avatar from "../assets/avatar.png";

const MyNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="px-5 ">
        <Container className="d-flex px-5">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" width={50} height={50} />
          </Navbar.Brand>
          <Navbar.Toggle className="ms-auto" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Col xs={2}>
              <Form className="d-flex bg-light position-relative">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 ps-5 pe-5"
                  aria-label="Search"
                />
                <img
                  width={25}
                  height={25}
                  src={search}
                  alt="search"
                  className="position-absolute"
                  style={{ left: "8px", top: "8px" }}
                />
              </Form>
            </Col>
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                className="nav-link d-flex flex-column justify-content-center align-items-center"
                to="/"
              >
                <span>
                  <img width={30} height={30} src={home} alt="home" />
                </span>
                <span>Home</span>
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex flex-column justify-content-center align-items-center"
                to="/"
              >
                <span>
                  <img width={30} height={30} src={rete} alt="rete" />
                </span>
                <span>Rete</span>
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex flex-column justify-content-center align-items-center"
                to="/"
              >
                <span>
                  <img width={30} height={30} src={work} alt="work" />
                </span>
                <span>Lavoro</span>
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex flex-column justify-content-center align-items-center"
                to="/"
              >
                <span>
                  <img width={30} height={30} src={msg} alt="msg" />
                </span>
                <span>Messaggistica</span>
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex flex-column justify-content-center align-items-center"
                to="/"
              >
                <span>
                  <img width={30} height={30} src={notifiche} alt="notifiche" />
                </span>
                <span>Notifiche</span>
              </Nav.Link>
              <NavDropdown
                className="border-end"
                title="Tu"
                id="navbarScrollingDropdown"
              >
                <div className="d-flex flex-column justify-content-center align-items-center p-2">
                  <img
                    className="rounded-circle"
                    src={avatar}
                    alt="avatar"
                    width={30}
                    height={30}
                  />
                  <Dropdown.Toggle
                    className="bg-transparent border-0 p-0"
                    style={{ fontSize: "12px" }}
                    id="dropdown-basic"
                  >
                    Tu
                  </Dropdown.Toggle>
                </div>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
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
