import React from 'react';
import loginbackground from '../../assets/login-background.png';
import RegisterBox from '../../components/RegisterBox/RegisterBox';
import './RegisterPage.css';

const RegisterPage = () => {
    return (
        <div className='register-page'>
            <img className='move-bg-right ' src={loginbackground} />
            <div className='move-box-left' id='register-move-box-left'>
                <RegisterBox />
            </div>
        </div>);
};

export default RegisterPage;