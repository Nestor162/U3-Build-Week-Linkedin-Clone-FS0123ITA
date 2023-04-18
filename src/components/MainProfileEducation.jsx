import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/logo.svg';

const MainProfileEducation = () => {
	return (
		<>
			<Container className="mainProfileContainer">
				<Card className="mainProfileCard">
					<Card.Body className="px-4">
						<Container className="d-flex justify-content-between align-items-center p-0">
							<Card.Title className="mainCardsTitle">Education</Card.Title>
							<div>
								<Button variant="none">
									<i class="bi bi-plus-lg fs-4 text-muted"></i>
								</Button>
								<Button variant="none">
									<i class="bi bi-pencil-fill text-muted"></i>
								</Button>
							</div>
						</Container>
						<Card.Text>
							<Row>
								<Col xs={1}>
									<img src={Logo} alt="random" />
								</Col>
								<Col>
									<p className="fw-bold p-0 m-0"> Università degli Studi di Pavia</p>
									<p className="p-0 m-0"> Bachelor's in Political Sciences</p>
									<p className="text-muted p-0 m-0"> 2015 - 2018</p>
								</Col>
							</Row>
							<Row className="py-3">
								<Col xs={1}>
									<img src={Logo} alt="random" />
								</Col>
								<Col>
									<p className="fw-bold p-0 m-0"> ITC B. Belotti</p>
									<p className="p-0 m-0"> International Relations for Marketing</p>
									<p className="text-muted p-0 m-0"> 2010 - 2015</p>
								</Col>
							</Row>
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</>
	);
};

export default MainProfileEducation;
