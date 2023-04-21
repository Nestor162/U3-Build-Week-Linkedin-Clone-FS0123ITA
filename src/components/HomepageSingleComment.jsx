import { Card, Col, Container } from 'react-bootstrap';

const HomepageSingleComment = (props) => {
	return (
		<>
			<Card.Body key={props.id}>
				<Container>
					<Card.Title>
						<Col xs={1}>
							<img src="" alt="" />
						</Col>
						<Col>
							<p>{props.author}</p>
							<p>Titolo lavoro</p>
						</Col>
					</Card.Title>
					<Card.Text>
						<p>{props.comment}</p>
					</Card.Text>
				</Container>
			</Card.Body>
		</>
	);
};

export default HomepageSingleComment;
