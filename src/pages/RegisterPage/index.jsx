import React from 'react';
import { RegisterBox } from '../../components';
import './RegisterPage.css';

const RegisterPage = () => {
    return (
        <div className='register-page'>
            <img className='move-bg-right ' src='/assets/Images/login-background.png' />
            <div className='move-box-left' id='register-move-box-left'>
                <RegisterBox />
            </div>
        </div>
    );
};

export default RegisterPage;