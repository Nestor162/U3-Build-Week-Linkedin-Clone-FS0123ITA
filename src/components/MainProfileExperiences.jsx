import { useEffect } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { experienceFetch } from "../redux/actions";
import ExperiencesListCards from "./ExperiencesListCards";
import AddExperience from "./AddExperience";
import { Link } from "react-router-dom";

const MainProfileExperiences = () => {
  const dispatch = useDispatch();

  const userId = useSelector(state => state.personalProfile.id);
  const arrayExperiences = useSelector(state => state.experienceList.experiences);
  const isLoading = useSelector(state => state.experienceList.isLoading);

  useEffect(() => {
    if (userId) {
      experienceFetch(dispatch, userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <Container className="mainProfileContainer">
      <Card className="mainProfileCard">
        <Card.Body>
          <Container className="d-flex justify-content-between p-0">
            <Card.Title className="mainCardsTitle">Experience</Card.Title>
            <div>
              <AddExperience />
              <Pencil size={20} className="content-buttons me-2" />
            </div>
          </Container>

          <Card.Text>
            {isLoading ? (
              <div className="d-flex justify-content-center py-4">
                <Spinner />
              </div>
            ) : (
              <ExperiencesListCards />
            )}
          </Card.Text>
        </Card.Body>
        <hr className="cardSeparator" />
        <Button variant="none">
          <p className="toActivityPage">
            <Link to={"/experiences"}> Show all {arrayExperiences.length} experiences</Link>{" "}
            <i class="bi bi-arrow-right"></i>
          </p>
        </Button>
      </Card>
    </Container>
  );
};
export default MainProfileExperiences;
