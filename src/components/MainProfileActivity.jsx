import { useEffect, useState } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postsFetch, deletePosts } from '../redux/actions';
import MainProfilePostCreator from './MainProfilePostCreator';
import HomepagePostEditor from './HomepagePostEditor';

const MainProfileActivity = () => {
	const [modalShow, setModalShow] = useState(false);
	const posts = useSelector((state) => state.postsList.posts);
	const profileUsername = useSelector((state) => state.personalProfile.username);

	const dispatch = useDispatch();

	useEffect(() => {
		postsFetch(dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container className="mainProfileContainer">
			<Card className="mainProfileCard">
				<Card.Body className="px-5">
					<Container className="d-flex justify-content-between p-0">
						<Card.Title className="mainCardsTitle">Activity</Card.Title>
						<Button className="activityButton" onClick={() => setModalShow(true)}>
							Start a post
						</Button>
						<MainProfilePostCreator show={modalShow} onHide={() => setModalShow(false)} state={modalShow} />
					</Container>

					<Card.Subtitle className="mainCardsSubtitle">201 followers</Card.Subtitle>
					<Card.Text>
						{posts.map((post) => {
							return (
								post.username === profileUsername && (
									<>
										<Card className="px-3">
											<Card.Body>
												<Card.Title className="d-flex">
													<Col xs={2}>
														{post.user && <img src={post.user.image} alt={post.username} className="postProfileImage rounded-circle" />}
													</Col>

													<Col xs={9}>
														<p className="postHeader">
															{post.user && post.user.name} <span> {post.user && post.user.surname}</span>
														</p>
														<p className="postHeaderTitle"> {post.user && post.user.title}</p>

														<Card.Subtitle className="py-2 text-muted fw-light">
															<div className="postHeaderCreateDate">
																{new Date(post.createdAt).toLocaleDateString()}
																<span>
																	{post.updatedAt !== post.createdAt ? (
																		<span> • Edited: {new Date(post.updatedAt).toLocaleDateString()}</span>
																	) : (
																		<p></p>
																	)}{' '}
																</span>
															</div>
														</Card.Subtitle>
													</Col>
													{post.username === profileUsername && (
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
									</>
								)
							);
						})}
					</Card.Text>
					<hr className="cardSeparator" />
					<Button variant="none">
						<p className="toActivityPage">
							Show all activity <i class="bi bi-arrow-right"></i>
						</p>
					</Button>
				</Card.Body>
			</Card>
		</Container>
	);
};
export default MainProfileActivity;
