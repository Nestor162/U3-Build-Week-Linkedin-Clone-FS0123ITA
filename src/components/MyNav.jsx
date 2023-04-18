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

import notifiche from "../assets/notifiche.svg";
import { useSelector } from "react-redux";

const MyNav = () => {
  const profileImg = useSelector((state) => state.personalProfile.img);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="px-5">
        <Container className="d-flex px-5">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" width={50} height={50} />
          </Navbar.Brand>
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
              <Nav.Link
                className="nav-link d-flex flex-column justify-content-center align-items-center"
                to="/"
              >
                <span>
                  <img width={25} height={25} src={home} alt="home" />
                </span>
                <span>Home</span>
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex flex-column justify-content-center align-items-center"
                to="/"
              >
                <span>
                  <img width={25} height={25} src={rete} alt="rete" />
                </span>
                <span>My network</span>
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex flex-column justify-content-center align-items-center"
                to="/"
              >
                <span>
                  <img width={25} height={25} src={work} alt="work" />
                </span>
                <span>Jobs</span>
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex flex-column justify-content-center align-items-center"
                to="/"
              >
                <span>
                  <img width={25} height={25} src={msg} alt="msg" />
                </span>
                <span>Messagging</span>
              </Nav.Link>
              <Nav.Link
                className="nav-link d-flex flex-column justify-content-center align-items-center"
                to="/"
              >
                <span>
                  <img width={25} height={25} src={notifiche} alt="notifiche" />
                </span>
                <span>Notifications</span>
              </Nav.Link>
              <div>
                <img
                  className="rounded-circle"
                  src={profileImg}
                  alt="avatar"
                  width={25}
                  height={25}
                />
                <NavDropdown
                  className="profileDropdown"
                  title="Me"
                  id="navbarScrollingDropdown"
                >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </NavDropdown>
              </div>
              <vr className="navbarSeparator" />
              <div className="d-flex flex-column align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="25"
                  height="25"
                  focusable="false"
                >
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
                <NavDropdown
                  title="For business"
                  className="profileDropdown"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Lavoro</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Messaggistica
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Notifiche</NavDropdown.Item>
                </NavDropdown>
              </div>

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
