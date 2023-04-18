import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
	personalProfileEdit,
	SET_PROFILE_AREA,
	SET_PROFILE_BIO,
	SET_PROFILE_EMAIL,
	SET_PROFILE_LASTNAME,
	SET_PROFILE_NAME,
	SET_PROFILE_TITLE,
} from '../redux/actions';

const EditProfileModal = (props) => {
	const name = useSelector((state) => state.personalProfile.name);
	const surname = useSelector((state) => state.personalProfile.surname);
	const title = useSelector((state) => state.personalProfile.title);
	const bio = useSelector((state) => state.personalProfile.bio);
	const area = useSelector((state) => state.personalProfile.area);
	const email = useSelector((state) => state.personalProfile.email);

	const updatedProfile = useSelector((state) => state.personalProfile);
	console.log(updatedProfile);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(personalProfileEdit(updatedProfile));
	};

	return (
		<>
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Edit intro</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="px-4">
						<Form.Group className="mb-3" controlId="formGroupEmail">
							<Form.Label>First name*</Form.Label>
							<Form.Control type="text" placeholder={name} required onChange={(e) => dispatch({ type: SET_PROFILE_NAME, payload: e.target.value })} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formGroupPassword">
							<Form.Label>Last name*</Form.Label>
							<Form.Control
								type="text"
								placeholder={surname}
								required
								onChange={(e) => dispatch({ type: SET_PROFILE_LASTNAME, payload: e.target.value })}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formGroupPassword">
							<Form.Label>Headline*</Form.Label>
							<Form.Control
								type="text"
								placeholder={title}
								required
								onChange={(e) => dispatch({ type: SET_PROFILE_TITLE, payload: e.target.value })}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formGroupPassword">
							<Form.Label>Bio*</Form.Label>
							<Form.Control type="text" placeholder={bio} required onChange={(e) => dispatch({ type: SET_PROFILE_BIO, payload: e.target.value })} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formGroupPassword">
							<Form.Label>Location*</Form.Label>
							<Form.Control type="text" placeholder={area} required onChange={(e) => dispatch({ type: SET_PROFILE_AREA, payload: e.target.value })} />
						</Form.Group>

						<p className="fw-bold p-0 m-0">Contact Info</p>

						<Form.Group className="mb-3" controlId="formGroupPassword">
							<Form.Label>Email*</Form.Label>
							<Form.Control
								type="email"
								placeholder={email}
								required
								onChange={(e) => dispatch({ type: SET_PROFILE_EMAIL, payload: e.target.value })}
							/>
						</Form.Group>
						<Button onClick={props.onHide}>Close</Button>
						<Button onClick={handleSubmit}>Save</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default EditProfileModal;
