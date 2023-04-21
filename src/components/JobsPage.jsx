import { Col, Container, Row } from 'react-bootstrap';
import FavoritesSidebar from './FavoritesSidebar';
import JobsLatestSearch from './JobsLatestSearch';

const JobsPage = () => {
	return (
		<>
			<Container>
				<Row>
					<Col xs={3}>
						<FavoritesSidebar />
					</Col>
					<Col xs={9}>
						<JobsLatestSearch />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default JobsPage;
