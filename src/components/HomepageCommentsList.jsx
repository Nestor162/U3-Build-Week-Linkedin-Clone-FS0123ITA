import { useEffect } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postCommentsFetch } from '../redux/actions';

const HomepageCommentsList = (props) => {
	const dispatch = useDispatch();
	const comments = useSelector((state) => state.postsList.comments);
	console.log('EXISTING COMMENTS:', comments);

	useEffect(() => {
		postCommentsFetch(dispatch, props.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{comments ? (
				comments.map((comment) => {
					return (
						<>
							<Card.Body>
								<Container>
									<Card.Title>
										<Col xs={1}>
											<img src="" alt="" />
										</Col>
										<Col>
											<p>Nome e Cognome</p>
											<p>Titolo lavoro</p>
										</Col>
									</Card.Title>
									<Card.Text>
										<p> {comment.comment}</p>
									</Card.Text>
								</Container>
							</Card.Body>
						</>
					);
				})
			) : (
				<p> No comments here yet.</p>
			)}
		</>
	);
};

export default HomepageCommentsList;
