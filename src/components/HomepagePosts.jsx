import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Spinner, Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletePosts, postsFetch } from '../redux/actions';
import AddCommentToast from './AddCommentToast';
import HomepageCommentsList from './HomepageCommentsList';
import HomepagePostEditor from './HomepagePostEditor';

const HomepagePosts = () => {
	const posts = useSelector((state) => state.postsList.posts);
	const username = useSelector((state) => state.personalProfile.username);
	const comments = useSelector((state) => state.commentList.comments);

	const dispatch = useDispatch();

	const [modalShow, setModalShow] = useState(false);
	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState(false);

	const toggleShow = () => {
		setShow(!show);
		setSelected(true);
	};

	useEffect(() => {
		postsFetch(dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Container className="py-3">
				{posts.length > 0 ? (
					posts.slice(0, 10).map((post) => {
						return (
							<>
								<Container key={post._id} className="my-2">
									<Card className="px-3">
										<Card.Body>
											<Card.Title className="d-flex">
												<Col xs={2}>{post.user && <img src={post.user.image} alt={post.username} className="postProfileImage rounded-circle" />}</Col>

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

										<Container className="postUpperActionsBar">
											<p>Total rate</p>
											<p>Total comments</p>
										</Container>
										<hr />
										<Card.Body className="d-flex justify-content-around">
											<Col>
												<Button variant="none" className="postActionsBar">
													{' '}
													<i class="bi bi-hand-thumbs-up"></i> Like{' '}
												</Button>
											</Col>

											<Col>
												<Button onClick={toggleShow} className="postActionsBar" variant="none">
													<i class="bi bi-chat-dots"></i> Comment{' '}
												</Button>
												{selected && (
													<ToastContainer postion={'start-end'}>
														<Toast onClose={toggleShow} show={show} animation={false}>
															<AddCommentToast id={post._id} />
														</Toast>
													</ToastContainer>
												)}
											</Col>
											<Col>
												<Button variant="none" className="postActionsBar">
													{' '}
													<i class="bi bi-arrow-repeat"></i> Repost{' '}
												</Button>
											</Col>
											<Col>
												<Button variant="none" className="postActionsBar">
													{' '}
													<i class="bi bi-send-fill"></i>Send{' '}
												</Button>
											</Col>
										</Card.Body>
										{comments && <HomepageCommentsList id={post._id} />}
									</Card>
								</Container>
							</>
						);
					})
				) : (
					<Container className="d-flex justify-content-center mt-5">
						<Spinner animation="border" variant="primary" />{' '}
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
