import { Container } from 'react-bootstrap';
import MainProfileActivity from './MainProfileActivity';
import MainProfileAnalytics from './MainProfileAnalytics';
import MainProfileEducation from './MainProfileEducation';
import MainProfileLanguages from './MainProfileLanguages';
import MainProfileSection from './MainProfileSection';

const MainProfilePage = () => {
	return (
		<>
			<Container>
				<MainProfileSection />
				<MainProfileAnalytics />
				<MainProfileActivity />
				<MainProfileEducation />
				<MainProfileLanguages />
			</Container>
		</>
	);
};

export default MainProfilePage;
