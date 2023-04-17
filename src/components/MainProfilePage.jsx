import MainProfileActivity from './MainProfileActivity';
import MainProfileAnalytics from './MainProfileAnalytics';
import MainProfileSection from './MainProfileSection';

const MainProfilePage = () => {
	return (
		<>
			<MainProfileSection />
			<MainProfileAnalytics />
			<MainProfileActivity />
		</>
	);
};

export default MainProfilePage;
