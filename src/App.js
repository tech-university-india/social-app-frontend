import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginPage, ProfilePage, RegisterPage } from './pages';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={<LoginPage />} />
                <Route exact path='/register' element={<RegisterPage />} />
                <Route exact path='/post' element={<Home />} />
                <Route exact path='/profile/:userId' element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
