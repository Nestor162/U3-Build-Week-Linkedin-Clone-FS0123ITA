import { Button, Card, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProfileCover from '../assets/images/profileCoverImage.webp';

const HomepageLeftSidebar = () => {
	const profileImg = useSelector((state) => state.personalProfile.img);
	const profileUsername = useSelector((state) => state.personalProfile.username);
	const profileName = useSelector((state) => state.personalProfile.name);
	const profileSurname = useSelector((state) => state.personalProfile.surname);
	const profileTitle = useSelector((state) => state.personalProfile.title);

	return (
		<>
			<Container className="leftSidebar ">
				<Card className="leftSidebar mt-3">
					<Card.Img variant="top" src={ProfileCover} />
					<Row className="leftSidebarPicture">
						<img src={profileImg} alt={profileUsername} className="rounded-circle" style={{ width: '120px' }} />
					</Row>
					<Card.Body className="leftSidebarBody">
						<Card.Title className="text-center">
							{profileName} {profileSurname}
							<p className="leftSidebarSubtitle"> {profileTitle}</p>
						</Card.Title>
						<hr />
						<Card.Text className="pt-2 leftSidebarCounters">
							Who's viewed your profile <span> 51 </span>
						</Card.Text>
						<Card.Text className="leftSidebarCounters">
							Impressions of your posts <span> 92 </span>
						</Card.Text>
						<hr />
						<Button variant="none" className="leftSidebarButton">
							See your Premium features
						</Button>
					</Card.Body>
				</Card>
			</Container>
		</>
	);
};

export default HomepageLeftSidebar;
