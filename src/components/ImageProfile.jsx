import React from 'react';
import { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addImageAsync } from '../redux/actions';

const ImageProfile = () => {
	const dispatch = useDispatch();
	const [image, setImage] = useState([]);
	const formData = new FormData();
	const userId = useSelector((state) => state.personalProfile.id);
	const [show, setShow] = useState(false);
	// const [image, setImage] = useState("")

	const handleClose = () => setShow(false);

	const addImageEventHandler = (event) => {
		event.preventDefault();
		setImage(event.target.files[0]);
		console.log(image, 'files');
		// if (image !== 0) {
		//   // dispatch(addImageAsync(formData, userId));
		// }
		// formData.append(dispatch(addImageAsync(image)));
		console.log(formData, 'formData');
	};

	return (
		<>
			<Container className="mainProfileContainer">
				<Card className="mainProfileCard">
					<Container className="d-flex justify-content-between ">
						<Card.Title className="mainCardsTitle mt-3">Raccomended For You</Card.Title>
					</Container>

					<Card.Subtitle className="mainCardsSubtitle mt-2 mx-1">
						{' '}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="eyes-svg "
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-eye-fill"
							viewBox="0 0 16 16"
						>
							<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
							<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
						</svg>{' '}
						Solo per te{' '}
					</Card.Subtitle>
					<Form>
						<Form.Group>
							<svg
								className="camera mt-2 mx-1"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								class="bi bi-camera-fill"
								viewBox="0 0 16 16"
							>
								<path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
								<path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
							</svg>
							<label className="Label-Image mt-2 mx-1" for="avatar">
								Choose a profile picture:
							</label>
							<Form.Control type="file" rows={4} onChange={(e) => addImageEventHandler(e)} />
							{console.log(image, 'ciao')}
						</Form.Group>
					</Form>
					<Button variant="secondary" className="button-close">
						Close
					</Button>
					<Button
						variant="primary"
						className="button-upload"
						onClick={(e) => {
							e.preventDefault();
							handleClose();
							formData.append('profile', image);
							dispatch(addImageAsync(formData, userId));
						}}
					>
						Upload
					</Button>
				</Card>
				<>
					{/* <Button variant="secondary" className="button-close">
            Close
          </Button>
          <Button
            variant="primary"
            className="button-upload"
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              formData.append("profile", image);
              dispatch(addImageAsync(formData, userId));
            }}
          >
            Upload
          </Button> */}
				</>
			</Container>
		</>
	);
};

export default ImageProfile;
