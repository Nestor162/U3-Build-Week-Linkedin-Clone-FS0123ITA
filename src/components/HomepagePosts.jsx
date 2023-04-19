import { useEffect } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postsFetch } from '../redux/actions';

const HomepagePosts = () => {
	const posts = useSelector((state) => state.postsList.posts);
	console.log(posts);

	const dispatch = useDispatch();

	useEffect(() => {
		postsFetch(dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Container className="homeMainContainer py-3">
				{posts.length > 0 ? (
					posts.map((post) => {
						console.log('POST:', post.user, post._id);
						return (
							<Container key={post._id} className="my-2">
								<Card className="px-3">
									<Card.Body>
										<Card.Title className="d-flex">
											{post.user && <img src={post.user.image} alt={post.username} className="postProfileImage rounded-circle" />}
											<div>
												<p className="postHeader">
													{post.user && post.user.name} <span> {post.user && post.user.surname}</span>
												</p>
												<p className="postHeaderTitle"> {post.user && post.user.title}</p>

												<Card.Subtitle className="py-2 text-muted fw-light">
													<div className="postHeaderCreateDate">
														{new Date(post.createdAt).toLocaleDateString()}
														<span>
															{post.updatedAt !== post.createdAt ? <span> • Edited: {new Date(post.updatedAt).toLocaleDateString()}</span> : <p></p>}{' '}
														</span>
													</div>
												</Card.Subtitle>
											</div>
										</Card.Title>

										<Card.Text>{post.text}</Card.Text>
									</Card.Body>
								</Card>
							</Container>
						);
					})
				) : (
					<Container className="d-flex justify-content-center mt-5">
						<Spinner animation="border" variant="primary" />{' '}
					</Container>
				)}
			</Container>
		</>
	);
};

export default HomepagePosts;
