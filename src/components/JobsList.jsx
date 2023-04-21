import { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import JobsDetails from './JobsDetails';

const JobsList = () => {
	const jobs = useSelector((state) => state.jobsList.searchedJobs);
	const [selectedJob, setSelectedJob] = useState(null);

	const seeJobDetails = (id) => {
		console.log('JOB:', id);
		setSelectedJob(id);
	};

	return (
		<>
			<Container className="jobListCard">
				{jobs.slice(0, 15).map((job) => {
					return (
						<>
							<Button variant="none" onClick={() => seeJobDetails(job._id)}>
								<Card key={job._id}>
									<Card.Body>
										<Card.Title>{job.title}</Card.Title>
										<Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
										<Card.Text>{job.candidate_required_location}</Card.Text>
										<Card.Text>Published: {new Date(job.publication_date).toLocaleDateString()}</Card.Text>
									</Card.Body>
								</Card>
							</Button>
						</>
					);
				})}
			</Container>
			{selectedJob !== null && <JobsDetails id={selectedJob} />}
		</>
	);
};

export default JobsList;
