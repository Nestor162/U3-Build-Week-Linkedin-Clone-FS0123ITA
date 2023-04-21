import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const JobsLatestSearch = () => {
	const searchedQueries = useSelector((state) => state.queries.searchedQueries);
	return (
		<>
			<Container>
				<Card className="mt-3">
					<Card.Body>
						<Card.Title>Your latest searches </Card.Title>
						{searchedQueries.length > 0 ? (
							searchedQueries.slice(0, 5).map((query) => {
								return <Card.Text>{query}</Card.Text>;
							})
						) : (
							<p> No search query yet, try and look for something in the search bar!</p>
						)}
					</Card.Body>
				</Card>
			</Container>
		</>
	);
};

export default JobsLatestSearch;
