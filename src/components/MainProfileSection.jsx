import { useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCoverImage from '../assets/images/profileCoverImage.webp';
import { personalProfileFetch } from '../redux/actions';

const MainProfileSection = () => {
	const profileName = useSelector((state) => state.personalProfile.profileName);
	const profileLastname = useSelector((state) => state.personalProfile.profileLastname);
	const profileTitle = useSelector((state) => state.personalProfile.profileTitle);
	const profileArea = useSelector((state) => state.personalProfile.profileArea);
	const profileImg = useSelector((state) => state.personalProfile.profileImg);

	const dispatch = useDispatch();

	useEffect(() => {
		personalProfileFetch(dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container id="mainProfileContainer">
			<Card className="mainProfileCard">
				<img src={profileImg} alt="profile" id="mainProfilePicture" />
				<Card.Img variant="top" src={ProfileCoverImage} />

				<Button variant="none" className="mainProfileButtonEdit">
					<i className="bi bi-pencil mainProfileEdit"></i>
				</Button>

				<Card.Body id="mainProfileBody">
					<Card.Title className="mainProfileName">
						{profileName} {profileLastname}
					</Card.Title>
					<Card.Text className="mainProfileTitle">{profileTitle}</Card.Text>
					<Card.Text className="mainProfileArea">
						{profileArea} - <span className="mainProfileContactInfo"> Contact info </span>
					</Card.Text>
					<Button className="mainProfileButtonOpen">Open to</Button>
					<Button className="mainProfileButtonAdd">Add profile section</Button>
					<Button className="mainProfileButtonMore">More</Button>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default MainProfileSection;
