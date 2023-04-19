import React, { useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { ArrowLeft, Pencil, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { experienceFetch } from "../redux/actions";
import { Link } from "react-router-dom";

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

  const editExperience = async idExp => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${idExp}`,
        {
          method: "PUT",
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(experienceInfo)
        }
      );
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

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const [idExp, setIdExp] = useState("");

  const [experienceInfo, setExperienceInfo] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: ""
  });

  const handleAccept = async id => {
    await deleteExperience(id);
    setShow(false);
    await experienceFetch(dispatch, userId);
  };

  const handleAcceptEdit = async () => {
    await editExperience(idExp);
    handleClose2();
    await experienceFetch(dispatch, userId);
  };

  return (
    <Container className="mainProfileContainer">
      <Card className="mainProfileCard">
        <h5 className="p-4">Experiences</h5>
        {arrayExperiences && arrayExperiences.length > 0 ? (
          arrayExperiences.map(exp => {
            return (
              <Row className="g-0">
                <Col xs={4} style={{ maxWidth: "fit-content" }} className="pt-3 ps-3">
                  {/* <img src={exp} className="img-fluid rounded-circle" alt={`img`} width="48" height="48" /> */}
                </Col>
                <Col xs={11} className="position-relative exp-col">
                  <Trash className="position-absolute delete-button" size={20} onClick={handleShow} />{" "}
                  <Pencil
                    size={20}
                    className="me-4 position-absolute delete-button edit-button"
                    onClick={() => {
                      setExperienceInfo({
                        role: exp.role,
                        company: exp.company,
                        startDate: exp.startDate,
                        endDate: exp.endDate,
                        description: exp.description,
                        area: exp.area
                      });
                      setShow2(true);
                      setIdExp(exp._id);
                    }}
                  />
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>DELETE EXPERIENCE</Modal.Title>
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
                    <h5 className="card-title fw-semibold fs-6 mb-1">{exp.role}</h5>
                    <p className="mb-0">
                      <small className="card-text lh-0 mb-0">{exp.company}</small>
                    </p>

                    <small className="text-secondary lh-1">
                      {new Date(exp.startDate).toLocaleDateString()} -{" "}
                      {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Present"}
                    </small>

                    <p className="card-title mt-2">{exp.description}</p>

                    <p>{arrayExperiences.description}</p>
                  </div>
                </Col>
              </Row>
            );
          })
        ) : (
          <Alert className="mt-4">There aren't experiences yet</Alert>
        )}
        <hr />
        <p className="toActivityPage my-2">
          <Link to={"/me"}> Go back to profile page</Link> <ArrowLeft />
        </p>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT EXPERIENCE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Edit your experience and click on "save changes"
            <Form>
              <Form.Group className="mb-3" controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  onChange={e => {
                    setExperienceInfo({ ...experienceInfo, role: e.target.value });
                  }}
                  value={experienceInfo.role}
                  type="text"
                  placeholder="Enter your role"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="company">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  onChange={e => {
                    setExperienceInfo({ ...experienceInfo, company: e.target.value });
                  }}
                  value={experienceInfo.company}
                  type="text"
                  placeholder="Enter the Company's name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Sdate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  onChange={e => {
                    setExperienceInfo({ ...experienceInfo, startDate: e.target.value });
                  }}
                  value={experienceInfo.startDate}
                  type="date"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Edate">
                <Form.Label>End Date (can be empty)</Form.Label>
                <Form.Control
                  onChange={e => {
                    setExperienceInfo({ ...experienceInfo, endDate: e.target.value });
                  }}
                  value={experienceInfo.endDate}
                  type="date"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={e => {
                    setExperienceInfo({ ...experienceInfo, description: e.target.value });
                  }}
                  value={experienceInfo.description}
                  type="text"
                  placeholder="Describe your experience"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Area">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  onChange={e => {
                    setExperienceInfo({ ...experienceInfo, area: e.target.value });
                  }}
                  value={experienceInfo.area}
                  type="text"
                  placeholder="Enter your country name"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Cancel
            </Button>
            <Button
              variant="success"
              onClick={() => {
                handleAcceptEdit();
              }}
            >
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </Container>
  );
}

export default ExperiencesListCards;
