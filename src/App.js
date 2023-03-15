import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CreatePostPage, LoginPage, RegisterPage } from './pages';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/login' element={<LoginPage />} />
				<Route exact path='/register' element={<RegisterPage />} />
				<Route exact path='/:entityType/create' element={<CreatePostPage />} />
				<Route exact path='/post' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
