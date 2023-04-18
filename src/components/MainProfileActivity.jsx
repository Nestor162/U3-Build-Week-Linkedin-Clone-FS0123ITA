import { Button, Card, Container } from 'react-bootstrap';

const MainProfileActivity = () => {
	return (
		<Container className="mainProfileContainer">
			<Card className="mainProfileCard">
				<Card.Body className="px-4">
					<Container className="d-flex justify-content-between p-0">
						<Card.Title className="mainCardsTitle">Activity</Card.Title>
						<Button className="activityButton"> Start a post</Button>
					</Container>

					<Card.Subtitle className="mainCardsSubtitle">201 followers</Card.Subtitle>
					<Card.Text>
						<p className="analyticsTitles">You haven't posted lately</p>
						<p>Recent posts you share or comment on will be displayed here</p>
					</Card.Text>
					<hr className="cardSeparator" />
					<Button variant="none">
						<p className="toActivityPage">
							Show all activity <i class="bi bi-arrow-right"></i>
						</p>
					</Button>
				</Card.Body>
			</Card>
		</Container>
	);
};
export default MainProfileActivity;
