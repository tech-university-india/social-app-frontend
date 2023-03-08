import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PostFeed from './pages/PostFeed';
// import LoginPage from './pages/Login';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PostFeed />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
