import { Card, Container } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FAVORITE, SET_FAVORITE } from "../redux/actions";

const JobsList = () => {
  const jobs = useSelector(state => state.jobsList.searchedJobs);
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleFavorite = job => {
    console.log(favorites);
    dispatch({ type: SET_FAVORITE, payload: job });
  };

  const handleUnfavorite = job => {
    dispatch({ type: REMOVE_FAVORITE, payload: job });
  };

  return (
    <>
      <Container>
        {jobs.slice(0, 15).map(job => {
          return (
            <>
              <Card>
                <Card.Body className="position-relative card-jobs">
                  {favorites.includes(job) ? (
                    <StarFill
                      className="position-absolute star-icon d-block"
                      size={"22px"}
                      fill="goldenrod"
                      onClick={() => handleUnfavorite(job)}
                    />
                  ) : (
                    <Star className="position-absolute star-icon" size={"22px"} onClick={() => handleFavorite(job)} />
                  )}
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
                  <Card.Text>{job.candidate_required_location}</Card.Text>
                  <Card.Text>Published: {new Date(job.publication_date).toLocaleDateString()}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default JobsList;
