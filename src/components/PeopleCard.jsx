import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { PersonFillAdd } from "react-bootstrap-icons";

function PeopleCard({ name, description, pic }) {
  return (
    <div className="mb-2">
      <Row className="g-0">
        <Col xs={4} style={{ maxWidth: "fit-content" }} className="pt-3 ps-3">
          <img src={pic} className="img-fluid rounded-circle" alt={`Profile of ${name}`} width="48" height="48" />
        </Col>
        <Col xs={8}>
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-6 mb-1">{name}</h5>
            <p className="card-text lh-1">{description}</p>
            <Button variant="outline-secondary rounded-pill px-3 py-1">
              <PersonFillAdd /> <span className="pb-1">Connect</span>
            </Button>
          </div>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

export default PeopleCard;
