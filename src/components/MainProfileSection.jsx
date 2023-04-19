import { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCoverImage from '../assets/images/profileCoverImage.webp';
import { personalProfileFetch } from '../redux/actions';
import EditProfileModal from './EditProfileModal';

const MainProfileSection = () => {
	const profileName = useSelector((state) => state.personalProfile.name);
	const profileLastname = useSelector((state) => state.personalProfile.surname);
	const profileTitle = useSelector((state) => state.personalProfile.title);
	const profileArea = useSelector((state) => state.personalProfile.area);
	const profileImg = useSelector((state) => state.personalProfile.img);

	const dispatch = useDispatch();

	useEffect(() => {
		personalProfileFetch(dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [modalShow, setModalShow] = useState(false);

	return (
		<Container className="mainProfileContainer">
			<Card className="mainProfileCard">
				<img src={profileImg} alt="profile" id="mainProfilePicture" />
				<Card.Img variant="top" src={ProfileCoverImage} />

				<Button variant="none" className="mainProfileButtonEdit" onClick={() => setModalShow(true)}>
					<i className="bi bi-pencil mainProfileEdit"></i>
				</Button>
				<EditProfileModal show={modalShow} onHide={() => setModalShow(false)} />

				<Card.Body id="mainProfileBody">
					<Card.Title className="mainProfileName">
						{profileName} {profileLastname}
					</Card.Title>
					<Card.Text className="mainProfileTitle">{profileTitle}</Card.Text>
					<Card.Text className="mainProfileArea">
						{profileArea} - <span className="mainProfileContactInfo"> Contact info </span>
					</Card.Text>
					<Card.Text className="mainProfileContactInfo"> 201 contacts </Card.Text>
					<Button className="mainProfileButtonOpen">Open to</Button>
					<Button className="mainProfileButtonAdd">Add profile section</Button>
					<Button className="mainProfileButtonMore">More</Button>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default MainProfileSection;
