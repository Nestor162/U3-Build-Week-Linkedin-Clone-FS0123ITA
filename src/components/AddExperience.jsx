import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

function AddExperience() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const userId = useSelector((state) => state.personalProfile.id);
	const handleSave = () => {
		AddExperienceFetch(userId);
		setShow(false);
	};

	const [experienceInfo, setExperienceInfo] = useState({
		role: '',
		company: '',
		startDate: '',
		endDate: '',
		description: '',
		area: '',
	});

	const AddExperienceFetch = async (userId) => {
		try {
			const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
				method: 'POST',
				headers: {
					authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(experienceInfo),
			});
			if (response.ok) {
				const data = await response.json();
				console.log(data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Plus size={35} className="content-buttons me-4" onClick={handleShow} />

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="role">
							<Form.Label>Role</Form.Label>
							<Form.Control
								onChange={(e) => {
									setExperienceInfo({ ...experienceInfo, role: e.target.value });
								}}
								type="text"
								placeholder="Enter your role"
								autoFocus
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="company">
							<Form.Label>Company</Form.Label>
							<Form.Control
								onChange={(e) => {
									setExperienceInfo({ ...experienceInfo, company: e.target.value });
								}}
								type="text"
								placeholder="Enter the Company's name"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="Sdate">
							<Form.Label>Start Date</Form.Label>
							<Form.Control
								onChange={(e) => {
									setExperienceInfo({ ...experienceInfo, startDate: e.target.value });
								}}
								type="date"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="Edate">
							<Form.Label>End Date (can be empty)</Form.Label>
							<Form.Control
								onChange={(e) => {
									setExperienceInfo({ ...experienceInfo, endDate: e.target.value });
								}}
								type="date"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="description">
							<Form.Label>Description</Form.Label>
							<Form.Control
								onChange={(e) => {
									setExperienceInfo({ ...experienceInfo, description: e.target.value });
								}}
								type="text"
								placeholder="Describe your experience"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="Area">
							<Form.Label>Area</Form.Label>
							<Form.Control
								onChange={(e) => {
									setExperienceInfo({ ...experienceInfo, area: e.target.value });
								}}
								type="text"
								placeholder="Enter your country name"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSave}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddExperience;
