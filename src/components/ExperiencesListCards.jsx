import React, { useState } from "react";
import { Alert, Button, Col, Modal, Row } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { experienceFetch } from "../redux/actions";

function ExperiencesListCards() {
  const arrayExperiences = useSelector(state => state.experienceList.experiences);
  const userId = useSelector(state => state.personalProfile.id);

  const dispatch = useDispatch();

  const deleteExperience = async id => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* Modale conferma eliminazione */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAccept = async id => {
    await deleteExperience(id);
    setShow(false);
    await experienceFetch(dispatch, userId);
  };

  return (
    <>
      {arrayExperiences && arrayExperiences.length > 0 ? (
        arrayExperiences.slice(0, 5).map(exp => {
          return (
            <Row className="g-0">
              <Col xs={4} style={{ maxWidth: "fit-content" }} className="pt-3 ps-3">
                {/* <img src={exp} className="img-fluid rounded-circle" alt={`img`} width="48" height="48" /> */}
              </Col>
              <Col xs={11} className="position-relative exp-col">
                <Trash className="position-absolute delete-button" size={20} onClick={handleShow} />
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you sure that you want to delete:{" "}
                    <span>
                      <strong className="d-block">{exp.company}</strong>
                      <em className="d-block">{exp.description}</em>
                    </span>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button
                      variant="danger"
                      onClick={e => {
                        handleAccept(exp._id);
                      }}
                    >
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>
                <div className="card-body">
                  <h5 className="card-title fw-semibold fs-6 mb-1">{exp.description}</h5>
                  <p className="card-text lh-0 mb-0">{exp.company}</p>
                  <small className="text-secondary lh-1">
                    {new Date(exp.startDate).toLocaleDateString()} -{" "}
                    {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Present"}
                  </small>

                  <p>{arrayExperiences.description}</p>
                </div>
              </Col>
            </Row>
          );
        })
      ) : (
        <Alert className="mt-4">There aren't experiences yet</Alert>
      )}
    </>
  );
}

export default ExperiencesListCards;
