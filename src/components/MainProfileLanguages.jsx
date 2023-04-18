import { Button, Card, Container, Row } from 'react-bootstrap';

const MainProfileLanguages = () => {
	return (
		<>
			<Container className="mainProfileContainer">
				<Card className="mainProfileCard">
					<Card.Body className="px-4">
						<Container className="d-flex justify-content-between align-items-center p-0">
							<Card.Title className="mainCardsTitle">Languages</Card.Title>
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
							<Row className="py-2 px-3">
								<p className="fw-bold p-0 m-0"> Italian</p>
								<p className="p-0 m-0 text-muted"> Native</p>
							</Row>
							<Row className="py-2 px-3">
								<p className="fw-bold p-0 m-0"> English</p>
								<p className="p-0 m-0 text-muted"> Native</p>
							</Row>
							<Row className="py-2 px-3">
								<p className="fw-bold p-0 m-0"> French</p>
								<p className="p-0 m-0 text-muted"> Fluent</p>
							</Row>
							<Row className="py-2 px-3">
								<p className="fw-bold p-0 m-0"> Spanish</p>
								<p className="p-0 m-0 text-muted"> Fluent</p>
							</Row>
							<Row className="py-2 px-3">
								<p className="fw-bold p-0 m-0"> Mandarin Chinese</p>
								<p className="p-0 m-0 text-muted"> Elementary</p>
							</Row>
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</>
	);
};

export default MainProfileLanguages;
