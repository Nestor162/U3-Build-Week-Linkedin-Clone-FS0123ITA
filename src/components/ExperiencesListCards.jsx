import React from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function ExperiencesListCards() {
  const arrayExperiences = useSelector(state => state.experienceList.experiences);
  console.log(arrayExperiences);

  return (
    <>
      {arrayExperiences && arrayExperiences.length > 0 ? (
        arrayExperiences.map(exp => {
          return (
            <Row className="g-0">
              <Col xs={4} style={{ maxWidth: "fit-content" }} className="pt-3 ps-3">
                {/* <img src={exp} className="img-fluid rounded-circle" alt={`img`} width="48" height="48" /> */}
              </Col>
              <Col xs={11} className="position-relative">
                <Trash className="position-absolute d-none" style={{ right: 0, top: "30%" }} />
                <div className="card-body">
                  <h5 className="card-title fw-semibold fs-6 mb-1">{exp.description}</h5>
                  <p className="card-text lh-0 mb-0">{exp.company}</p>
                  <small className="text-secondary lh-1">
                    {exp.startDate} - {exp.endDate}
                  </small>
                  <p>{arrayExperiences.description}</p>
                </div>
              </Col>
            </Row>
          );
        })
      ) : (
        <div className="d-flex justify-content-center py-4">
          <Spinner />
        </div>
        //
      )}
      {arrayExperiences.length === 0 && <Alert>There aren't experiences yet</Alert>}
    </>
  );
}

export default ExperiencesListCards;
