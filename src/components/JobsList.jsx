import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const JobsList = () => {
	const jobs = useSelector((state) => state.jobsList.searchedJobs);

	return (
		<>
			<Container>
				{jobs.slice(0, 15).map((job) => {
					return (
						<>
							<Card>
								<Card.Body>
									<Card.Title>{job.title}</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
									<Card.Text>{job.candidate_required_location}</Card.Text>
									<Card.Text>Published: {new Date(job.publication_date).toLocaleDateString()}</Card.Text>
								</Card.Body>
							</Card>
						</>
					);
				})}
			</Container>
		</>
	);
};

export default JobsList;
