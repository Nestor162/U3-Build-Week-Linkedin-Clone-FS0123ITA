import { Container } from 'react-bootstrap';
import JobsDetails from './JobsDetails';
import JobsList from './JobsList.jsx';

const JobsSearchPage = () => {
	return (
		<>
			<Container className="d-flex">
				<JobsList />
				<JobsDetails />
			</Container>
		</>
	);
};

export default JobsSearchPage;
