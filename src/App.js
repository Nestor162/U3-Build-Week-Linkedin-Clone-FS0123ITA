import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainProfileSection from './components/MainProfileSection';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/me" element={<MainProfileSection />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
