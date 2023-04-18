import { useEffect } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { experienceFetch } from "../redux/actions";
import ExperiencesListCards from "./ExperiencesListCards";

const MainProfileExperiences = () => {
  const dispatch = useDispatch();

  const userId = useSelector(state => state.personalProfile.profileId);
  const arrayExperiences = useSelector(state => state.experienceList.experiences);

  useEffect(() => {
    if (userId) {
      experienceFetch(dispatch, userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // useEffect(() => {
  //   console.log(arrayExperiences);
  // });

  return (
    <Container className="mainProfileContainer">
      <Card className="mainProfileCard">
        <Card.Body>
          <Container className="d-flex justify-content-between p-0">
            <Card.Title className="mainCardsTitle">Experience</Card.Title>
            <div>
              <Plus size={35} className="content-buttons me-4" />
              <Pencil size={20} className="content-buttons me-2" />
            </div>
          </Container>

          <Card.Text>
            <div className="d-flex justify-content-center py-4">
              <Spinner />
            </div>
            {arrayExperiences && <ExperiencesListCards />}

            {/* {arrayExperiences && Array.isArray(arrayExperiences) && arrayExperiences.length > 0 ? (
              arrayExperiences.map(exp => {
                return (
                  <Row className="g-0">
                    <Col xs={4} style={{ maxWidth: "fit-content" }} className="pt-3 ps-3"></Col>
                    <Col xs={11}>
                      <div className="card-body">
                        <h5 className="card-title fw-semibold fs-6 mb-1">{exp.role}</h5>
                        <p className="card-text lh-0 mb-0">{exp.company}</p>
                        <small className="text-secondary lh-1">{exp.startDate}</small>
                        <p>{arrayExperiences.description}</p>
                      </div>
                    </Col>
                  </Row>
                );
              })()
            ) : (
              <Alert>There aren't experiences yet</Alert>
            )} */}
          </Card.Text>
        </Card.Body>
        <hr className="cardSeparator" />
        <Button variant="none">
          <p className="toActivityPage">
            Show all {arrayExperiences.length} experiences <i class="bi bi-arrow-right"></i>
          </p>
        </Button>
      </Card>
    </Container>
  );
};
export default MainProfileExperiences;
