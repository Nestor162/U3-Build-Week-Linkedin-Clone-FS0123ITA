import { Button, Card, Container, Row } from 'react-bootstrap';

const JobsLeftSidebar = () => {
	return (
		<>
			{' '}
			<Container className="leftSidebar ">
				<Card className="leftSidebar mt-3">
					<Card.Title className="text-center py-3 fw-bold">Jobs update</Card.Title>
					<Card.Body>
						<Card.Text className="jobsUpdateTitle">Front-end Developer</Card.Text>
						<Card.Text className="leftSidebarCounters">
							Impressions of your posts <span> 92 </span>
						</Card.Text>
						<hr />
					</Card.Body>
					<Container className="d-flex justify-content-center pb-3">
						<Button className="jobsApplyButton">
							Apply
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								data-supported-dps="24x24"
								fill="currentColor"
								class="mercado-match"
								width="20"
								height="20"
								focusable="false"
							>
								<path d="M21 3v9h-2V6.41L9.41 16 8 14.59 17.59 5H12V3zm-6 15a1 1 0 01-1 1H6a1 1 0 01-1-1v-8a1 1 0 011-1h5V7H6a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3v-5h-2z"></path>
							</svg>
						</Button>
					</Container>
				</Card>
			</Container>
		</>
	);
};

export default JobsLeftSidebar;
