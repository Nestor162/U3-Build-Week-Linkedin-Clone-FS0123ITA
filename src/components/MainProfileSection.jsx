import { useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCoverImage from '../assets/images/profileCoverImage.webp';
import { personalProfileFetch } from '../redux/actions';

const MainProfileSection = () => {
	const profileName = useSelector((state) => state.personalProfile.profileName);
	const profileLastname = useSelector((state) => state.personalProfile.profileLastname);
	const profileEmail = useSelector((state) => state.personalProfile.profileEmail);
	const profileBio = useSelector((state) => state.personalProfile.profileBio);
	const profileTitle = useSelector((state) => state.personalProfile.profileTitle);
	const profileArea = useSelector((state) => state.personalProfile.profileArea);
	const profileUsername = useSelector((state) => state.personalProfile.profileUsername);
	const profileId = useSelector((state) => state.personalProfile.profileId);

	const dispatch = useDispatch();

	useEffect(() => {
		personalProfileFetch(dispatch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<Card>
				<Card.Img variant="top" src={ProfileCoverImage} />
				<Card.Body>
					<Card.Title>
						{profileName} {profileLastname}
					</Card.Title>
					<Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default MainProfileSection;
