import React from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

function ExperiencesListCards() {
  const arrayExperiences = useSelector(state => state.experienceList.experiences);
  const userId = useSelector(state => state.personalProfile.profileId);

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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = id => {
    deleteExperience(userId, id);
  };

  return (
    <>
      {arrayExperiences && arrayExperiences.length > 0 ? (
        arrayExperiences.map(exp => {
          return (
            <Row className="g-0">
              <Col xs={4} style={{ maxWidth: "fit-content" }} className="pt-3 ps-3">
                {/* <img src={exp} className="img-fluid rounded-circle" alt={`img`} width="48" height="48" /> */}
              </Col>
              <Col xs={11} className="position-relative exp-col">
                <Trash
                  className="position-absolute delete-button"
                  size={20}
                  onClick={() => {
                    handleDelete(exp._id);
                  }}
                />
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
      )}
      {/* {arrayExperiences.length === 0 && <Alert>There aren't experiences yet</Alert>} */}
    </>
  );
}

export default ExperiencesListCards;
