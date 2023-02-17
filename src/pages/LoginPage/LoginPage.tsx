import React from 'react';
import loginbackground from '../../assets/login-background.png';
import LoginBox from '../../components/LoginBox/LoginBox';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className='login-page'>
            <img className='move-bg-right' src={loginbackground} />
            <div className='move-box-left'>
                <LoginBox  />
            </div>
        </div>);
};

export default LoginPage;