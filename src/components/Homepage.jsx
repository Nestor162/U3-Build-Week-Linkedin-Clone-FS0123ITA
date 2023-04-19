import { Container } from 'react-bootstrap';
import HomepagePostCreator from './HomepagePostCreator';
import HomepagePosts from './HomepagePosts';

const Homepage = () => {
	return (
		<>
			<Container>
				<HomepagePostCreator />
				<hr className="mt-3 homeMainContainer" />
				<HomepagePosts />
			</Container>
		</>
	);
};

export default Homepage;
