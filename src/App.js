import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MainProfilePage from './components/MainProfilePage';
import RightSidebar from './components/RightSidebar';
import MyNav from './components/MyNav';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

function App() {
	return (
		<BrowserRouter>
			<MyNav />
			<Container className="d-flex">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/me" element={<MainProfilePage />} />
				</Routes>
				<RightSidebar />
			</Container>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
