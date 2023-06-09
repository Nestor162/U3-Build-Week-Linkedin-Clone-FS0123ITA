import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Spinner, Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletePosts, postsFetch } from '../redux/actions';
import HomepagePostEditor from './HomepagePostEditor';
import AddCommentToast from './AddCommentToast';
import HomepageCommentsList from './HomepageCommentsList';
import { Check2, PlusLg } from 'react-bootstrap-icons';
import { REMOVE_FOLLOW, SET_FOLLOW } from '../redux/actions';

const HomepagePosts = () => {
	const posts = useSelector((state) => state.postsList.posts);
	const username = useSelector((state) => state.personalProfile.username);
	const comments = useSelector((state) => state.commentList.comments);

	const dispatch = useDispatch();

	const [modalShow, setModalShow] = useState(false);
	const following = useSelector((state) => state.following.following);
	const followingIds = following.map((following) => following._id);

	const handleFollow = (user) => {
		dispatch({ type: SET_FOLLOW, payload: user });
	};
	const handleUnFollow = (user) => {
		dispatch({ type: REMOVE_FOLLOW, payload: user });
	};

	const [isFilterActive, setIsFilterActive] = useState(false);

	const handleFilterClick = () => {
		setIsFilterActive(!isFilterActive);
	};

	const filteredPosts = isFilterActive ? posts.filter((post) => followingIds.includes(post.user._id)) : posts;

	const [numToShow, setNumToShow] = useState(10);

	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState('');

	const toggleShow = (id) => {
		setShow(!show);
		setSelected(id);
	};

	useEffect(() => {
		postsFetch(dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Container className="py-3">
				<span className={`d-inline-block friends-filter p-2 m-3 border border-primary ${isFilterActive ? 'active' : ''}`} onClick={handleFilterClick}>
					Only Friend's posts
				</span>

				{posts.length > 0 && filteredPosts.length > 0 ? (
					filteredPosts.slice(0, numToShow).map((post) => {
						return (
							<>
								<Container key={post._id} className="my-2">
									<Card className="px-3">
										<Card.Body>
											<Card.Title className="d-flex">
												<Col xs={2}>{post.user && <img src={post.user.image} alt={post.username} className="postProfileImage rounded-circle" />}</Col>

												<Col xs={9}>
													<div className="d-flex justify-content-between align-items-center">
														<p className="postHeader d-inline">
															{post.user && post.user.name} <span> {post.user && post.user.surname}</span>
														</p>

														{!followingIds.includes(post.user._id) ? (
															<span
																className="follow-btn py-2 pe-3 ps-2 rounded"
																style={{ color: '#0a66c2' }}
																onClick={() => {
																	handleFollow(post.user);
																}}
															>
																<PlusLg /> <span className="pb-1 align-middle fs-6 fw-semibold">Follow</span>
															</span>
														) : (
															<>
																<span
																	className="following-btn py-2 pe-3 ps-2 rounded"
																	style={{ color: '#5e5e5e' }}
																	onClick={() => {
																		handleUnFollow(post.user);
																	}}
																>
																	<Check2 /> <span className="pb-1 align-middle fs-6 fw-semibold">Following</span>
																</span>
															</>
														)}
													</div>
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
												<Button
													onClick={() => {
														toggleShow(post._id);
													}}
													className="postActionsBar"
													variant="none"
												>
													<i class="bi bi-chat-dots"></i> Comment{' '}
												</Button>
												{selected === post._id && (
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
					{filteredPosts.length > 0 && (
						<Button
							className="postCreatorButton"
							onClick={() => {
								setNumToShow(numToShow + 10);
							}}
						>
							See more
						</Button>
					)}
				</Container>
			</Container>
		</>
	);
};

export default HomepagePosts;
