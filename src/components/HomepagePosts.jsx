import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePosts, postsFetch } from "../redux/actions";
import HomepagePostEditor from "./HomepagePostEditor";
import { PersonFillAdd } from "react-bootstrap-icons";

const HomepagePosts = () => {
  const posts = useSelector(state => state.postsList.posts);
  const username = useSelector(state => state.personalProfile.username);

  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    postsFetch(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="py-3">
        {posts.length > 0 ? (
          posts.slice(0, 10).map(post => {
            return (
              <>
                <Container key={post._id} className="my-2">
                  <Card className="px-3">
                    <Card.Body>
                      <Card.Title className="d-flex">
                        <Col xs={2}>
                          {post.user && (
                            <img
                              src={post.user.image}
                              alt={post.username}
                              className="postProfileImage rounded-circle"
                            />
                          )}
                        </Col>

                        <Col xs={9}>
                          <p className="postHeader d-inline me-3">
                            {post.user && post.user.name} <span> {post.user && post.user.surname}</span>
                          </p>
                          <Button variant="outline-secondary rounded-pill px-3 py-1">
                            <PersonFillAdd className="" /> <span className="pb-1">Connect</span>
                          </Button>
                          <p className="postHeaderTitle"> {post.user && post.user.title}</p>

                          <Card.Subtitle className="py-2 text-muted fw-light">
                            <div className="postHeaderCreateDate">
                              {new Date(post.createdAt).toLocaleDateString()}
                              <span>
                                {post.updatedAt !== post.createdAt ? (
                                  <span> • Edited: {new Date(post.updatedAt).toLocaleDateString()}</span>
                                ) : (
                                  <p></p>
                                )}{" "}
                              </span>
                            </div>
                          </Card.Subtitle>
                        </Col>
                        {post.username === username && (
                          <Col xs={1} className="d-flex align-items-top">
                            <Button variant="none" className="m-0 p-0" onClick={() => deletePosts(post._id, dispatch)}>
                              <i className="bi bi-trash3 py-0  px-2m-0"></i>
                            </Button>
                            <Button variant="none" className="m-0 p-0" onClick={() => setModalShow(true)}>
                              <i className="bi bi-pencil m-0 py-0 px-2"></i>
                            </Button>
                            <HomepagePostEditor
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                              id={post._id}
                              text={post.text}
                              state={modalShow}
                            />
                          </Col>
                        )}
                      </Card.Title>

                      <Card.Text>{post.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </>
            );
          })
        ) : (
          <Container className="d-flex justify-content-center mt-5">
            <Spinner animation="border" variant="primary" />{" "}
          </Container>
        )}
        <Container className="d-flex justify-content-center">
          <Button className="postCreatorButton">See more</Button>
        </Container>
      </Container>
    </>
  );
};

export default HomepagePosts;
