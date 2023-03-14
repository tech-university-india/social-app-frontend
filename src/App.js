import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginPage, RegisterPage, PostFeed } from './pages';
import Announcements from './pages/Announcements';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={<LoginPage />} />
                <Route exact path='/register' element={<RegisterPage />} />
                <Route exact path='/posts' element={<PostFeed />} />
                <Route exact path='/announcements' element={<Announcements />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
