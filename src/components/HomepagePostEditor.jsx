import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { modifyPosts, postsFetch } from '../redux/actions';

const HomepagePostEditor = (props) => {
	const [editedText, setEditedText] = useState({ text: props.text });
	const [modalShow, setModalShow] = useState(props.state);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		modifyPosts(props.id, editedText);
		postsFetch(dispatch);
		setModalShow(false);
	};

	return (
		<>
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={modalShow}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Edit post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="px-4">
						<Form.Group className="mb-3" controlId="formGroupEmail">
							<Form.Label>Text</Form.Label>
							<Form.Control type="text" placeholder={props.text} value={editedText} onChange={(e) => setEditedText({ text: e.target.value })} />
						</Form.Group>
						<Button onClick={props.onHide}>Close</Button>
						<Button onClick={handleSubmit}>Save</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default HomepagePostEditor;
