import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { convert } from 'html-to-text';

const JobsDetails = (props) => {
	const jobs = useSelector((state) => state.jobsList.searchedJobs);
	const selectedJob = jobs.find((job) => job._id === props.id);
	const options = {
		decodeEntities: true,
	};

	return (
		<>
			{console.log(Boolean(selectedJob))}
			{console.log(selectedJob)}
			{selectedJob && (
				<Card className="jobDetailsCard">
					<Card.Body>
						<Card.Title className="jobDetailsTitle">{selectedJob.title}</Card.Title>
						<Card.Subtitle className="jobDetailsSubtitle">
							{selectedJob.company_name} · {new Date(selectedJob.publication_date).toLocaleDateString()}
						</Card.Subtitle>
						<Card.Text className="jobDetailsIcons">
							<Row>
								<Col xs={1}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="currentColor"
										class="mercado-match"
										width="24"
										height="24"
										focusable="false"
									>
										<path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
									</svg>
								</Col>
								<Col>
									<p> Full-time</p>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="currentColor"
										class="mercado-match"
										width="24"
										height="24"
										focusable="false"
									>
										<path d="M4 2v20h16V2zm14 18h-4v-2h-4v2H6V4h12zm-7-8H8v-2h3zm0 4H8v-2h3zm5-4h-3v-2h3zm-5-4H8V6h3zm5 0h-3V6h3zm0 8h-3v-2h3z"></path>
									</svg>
								</Col>
								<Col>
									<p>51-200 employees</p>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="currentColor"
										class="mercado-match"
										width="24"
										height="24"
										focusable="false"
									>
										<path d="M22 3v2H11V3zM11 13h11v-2H11zm0 8h11v-2H11zM4.85 4L3.34 2.51 2 3.85 5.15 7l4.6-7H7.48zm0 8l-1.51-1.49L2 11.85 5.15 15l4.6-7H7.48zm0 8l-1.51-1.49L2 19.85 5.15 23l4.6-7H7.48z"></path>
									</svg>
								</Col>
								<Col>
									<p> Skills: ReactJs, Javascript, +6 more</p>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="currentColor"
										class="mercado-match"
										width="24"
										height="24"
										focusable="false"
									>
										<path d="M12 4.11V19.6l-3-2a9 9 0 01-4-7.49V6.44l7-2.33M12 2L3 5v5.11a11 11 0 004.9 9.16L12 22l4.1-2.73a11 11 0 004.9-9.16V5z"></path>
									</svg>
								</Col>
								<Col>
									<p> Job poster joined LinkedIn in 2016</p>
								</Col>
							</Row>
						</Card.Text>
						<Container className="d-flex">
							<Button className="mainProfileButtonOpen d-flex align-items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 14 14"
									data-supported-dps="14x14"
									fill="currentColor"
									class="mercado-match"
									width="14"
									height="14"
									focusable="false"
								>
									<g>
										<path
											class="background-mercado"
											d="M14 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM4 5H2v7h2zm.25-2A1.27 1.27 0 003 1.8 1.27 1.27 0 001.75 3 1.27 1.27 0 003 4.2 1.27 1.27 0 004.25 3zM12 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 006.89 6V5H5v7h2V8.73A1.74 1.74 0 018.66 6.8C9.82 6.8 10 7.94 10 8.73V12h2z"
										></path>
									</g>
								</svg>
								{'    '}
								Easy Apply
							</Button>
							<Button className="mainProfileButtonAdd"> Save</Button>
						</Container>
						<Card.Text className="jobDetailsAbout">
							<p className="jobDetailsAboutTitle">About the job</p>
							<p>{convert(selectedJob.description, options)}</p>
						</Card.Text>
					</Card.Body>
				</Card>
			)}
		</>
	);
};

export default JobsDetails;
