import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AiFillQuestionCircle, AiFillSetting } from "react-icons/ai";

const Footer = () => {
  return (
    <Container className="pt-4 pb-4 text-center text-lg-left">
      <Row>
        <Col lg="3" md="6" className="mb-4 mb-md-0">
          <h6>About</h6>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">
                Community Guidelines
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Privacy & Terms
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Sales Solutions
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Safety Center
              </a>
            </li>
          </ul>
        </Col>

        <Col lg="3" md="6" className="mb-4 mb-md-0">
          <h6>Accessibility</h6>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-dark">
                Careers
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Ad Choices
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Mobile
              </a>
            </li>
          </ul>
        </Col>

        <Col lg="3" md="6" className="mb-4 mb-md-0">
          <h6>Talent Solutions</h6>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">
                Marketing Solutions
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Advertising
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Small Business
              </a>
            </li>
          </ul>
        </Col>

        <Col lg="3" md="6" className="mb-4 mb-md-0">
          <ul className="list-unstyled">
            <li>
              <h5>
                <AiFillQuestionCircle />
                <span className="ml-3">Questions?</span>{" "}
              </h5>
              <span className="text-muted ml-4">
                {" "}
                <small>Visit our Help Center</small>
              </span>
            </li>
            <li>
              <h6 className="mt-3">
                <AiFillSetting />
                <span className="ml-3">
                  Manage your account and
                  <br />
                  <span className="ml-4">privacy</span>
                </span>{" "}
              </h6>
              <span className="text-muted ml-4">
                {" "}
                <small>Go to your Settings.</small>
              </span>
            </li>
          </ul>
        </Col>
      </Row>

      <small>
        <a className="text-muted mt-4" href="#e">
          LinkedIn Corporation &copy; {new Date().getFullYear()} Copyright
        </a>
      </small>
    </Container>
  );
};
export default Footer;
