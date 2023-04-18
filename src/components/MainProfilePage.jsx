import { Container } from 'react-bootstrap';
import ImageProfile from './ImageProfile';
import MainProfileActivity from './MainProfileActivity';
import MainProfileAnalytics from './MainProfileAnalytics';
import MainProfileSection from './MainProfileSection';
import MainProfileExperiences from './MainProfileExperiences';

const MainProfilePage = () => {
	return (
		<>
			<Container>
				<MainProfileSection />
				<MainProfileAnalytics />
				<MainProfileActivity />
				<MainProfileExperiences />
				<ImageProfile />
			</Container>
		</>
	);
};

export default MainProfilePage;
