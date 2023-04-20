import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPosts, postsFetch } from '../redux/actions';

const HomepagePostCreator = () => {
	const profileImg = useSelector((state) => state.personalProfile.img);
	const profileName = useSelector((state) => state.personalProfile.name);
	const dispatch = useDispatch();

	const [postText, setPostText] = useState({
		text: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		addPosts(dispatch, postText);
		setPostText('');
		postsFetch(dispatch);
	};

	return (
		<>
			<Container className="homeMainContainer pt-3">
				<Card className="px-3">
					<Row className="d-flex align-items-baseline pt-4">
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
										onChange={(e) => setPostText({ text: e.target.value })}
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row>
						<Col className="d-flex justify-content-center mb-3">
							<Button type="submit" onClick={handleSubmit} className="postCreatorButton">
								Post
							</Button>
						</Col>
					</Row>
				</Card>
			</Container>
		</>
	);
};

export default HomepagePostCreator;
