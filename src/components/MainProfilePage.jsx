import { Container } from 'react-bootstrap';
import MainProfileActivity from './MainProfileActivity';
import MainProfileAnalytics from './MainProfileAnalytics';
import MainProfileSection from './MainProfileSection';

const MainProfilePage = () => {
	return (
		<>
			<Container>
				<MainProfileSection />
				<MainProfileAnalytics />
				<MainProfileActivity />
			</Container>
		</>
	);
};

export default MainProfilePage;
