import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPosts } from '../redux/actions';

const HomepagePostCreator = () => {
	const profileImg = useSelector((state) => state.personalProfile.img);
	const profileName = useSelector((state) => state.personalProfile.name);
	const dispatch = useDispatch();

	const [postText, setPostText] = useState('');

	const handleSubmit = () => {
		addPosts(dispatch, postText);
		console.log('Post sent - received i do not know');
	};

	return (
		<>
			<Container className="homeMainContainer pt-3">
				<Card className="px-3">
					<Row className="d-flex align-items-baseline py-4">
						<Col xs={1}>
							<img src={profileImg} alt={profileName} className="postCreatorPicture" />
						</Col>
						<Col>
							<Form className="px-2">
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Control
										type="text"
										placeholder="Start a post"
										className="rounded-pill"
										value={postText}
										onChange={(e) => setPostText(e.target.value)}
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					{postText.length > 10 && (
						<Button type="submit" onClick={handleSubmit}>
							Post
						</Button>
					)}
				</Card>
			</Container>
		</>
	);
};

export default HomepagePostCreator;
