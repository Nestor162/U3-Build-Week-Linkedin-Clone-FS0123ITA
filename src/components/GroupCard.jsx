import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function GroupCard({ name, description, pic }) {
  return (
    <div className="mb-2">
      <Row className="g-0">
        <Col xs={4} style={{ maxWidth: "fit-content" }} className="pt-3 ps-3">
          <img src={pic} className="img-fluid" alt={`Profile of ${name}`} width="48" height="48" />
        </Col>
        <Col xs={8}>
          <div className="card-body">
            <h5 className="card-title fw-semibold fs-6 mb-0">{name}</h5>
            <p className="card-text text-secondary">{description}</p>
            <Button variant="outline-secondary rounded-pill px-3 py-1">
              <span className="pb-1">Join</span>
            </Button>
          </div>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

export default GroupCard;
