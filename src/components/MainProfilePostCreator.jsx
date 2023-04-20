import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPosts } from '../redux/actions';

const MainProfilePostCreator = (props) => {
	const dispatch = useDispatch();
	const [modalShow, setModalShow] = useState(props.state);
	console.log(props.state);
	const [postText, setPostText] = useState({
		text: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		addPosts(dispatch, postText);
		setModalShow(false);
		setPostText('');
	};
	return (
		<>
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Create post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="px-4">
						<Form.Group className="mb-3" controlId="formGroupEmail">
							<Form.Label>Text</Form.Label>
							<Form.Control type="text" placeholder="Write your post" onChange={(e) => setPostText({ text: e.target.value })} />
						</Form.Group>
						<Button onClick={() => setModalShow(false)} className="postCreatorButton">
							Close
						</Button>
						<Button onClick={handleSubmit} className="postCreatorButton">
							Save
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default MainProfilePostCreator;
