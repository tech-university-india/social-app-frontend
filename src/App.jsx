import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Feed from './pages/Feed';
// import LoginPage from './pages/Login';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Feed />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
