import React, { useState } from 'react';
import { LoginBox } from '../../components';
import './LoginPage.css';

const LoginPage = () => {
    const [userName,setUserName] = useState('');
    
    return (
        <div className='login-page'>
            <img className='move-bg-right' src='/assets/Images/login-background.png' />
            <div className='move-box-left'>
                <LoginBox setUserName={setUserName} userName={userName} />
            </div>
        </div>);
};

export default LoginPage;