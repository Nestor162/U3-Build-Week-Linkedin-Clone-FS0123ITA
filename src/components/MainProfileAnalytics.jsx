import { Card, Row, Col, Container } from 'react-bootstrap';

const MainProfileAnalytics = () => {
	return (
		<Container className="mainProfileContainer">
			<Card className="mainProfileCard">
				<Card.Body>
					<Card.Title className="mainCardsTitle">Analytics</Card.Title>
					<Card.Subtitle className="mainCardsSubtitle">
						<i class="bi bi-eye-fill"></i> {''}Private to you
					</Card.Subtitle>
					<Card.Text>
						<Row>
							<Col>
								<Row>
									<Col xs={1}>
										<i class="bi bi-people-fill"></i>
									</Col>
									<Col>
										<p className="analyticsTitles">48 profile views</p>
										<p className="m-0">Discover who's viewed your profile.</p>
									</Col>
								</Row>
							</Col>
							<Col>
								<Row>
									<Col xs={1}>
										<i class="bi bi-bar-chart-line-fill"></i>
									</Col>
									<Col>
										<p className="analyticsTitles">92 post impressions</p>
										<p className="m-0">Check out who's engaging with your posts.</p>
									</Col>
								</Row>
							</Col>
							<Col>
								<Row>
									<Col xs={1}>
										<i class="bi bi-search"></i>
									</Col>
									<Col>
										<p className="analyticsTitles">19 search appearances</p>
										<p className="m-0">See how often you appear in search results.</p>
									</Col>
								</Row>
							</Col>
						</Row>
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default MainProfileAnalytics;
