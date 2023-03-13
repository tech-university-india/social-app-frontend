import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginBox } from '../../components';
import { LOGIN } from '../../constants/ApiEndpoints';
import makeRequest from '../../utils/makeRequest';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validateError, setValidateError] = useState('');

    const navigate = useNavigate();

    const handleLoginClick = () => {
        makeRequest({ ...LOGIN }, {
            data: {
                'email': email,
                'password': password
            }
        })
            .then(resp => {
                localStorage.setItem('jwtToken', resp.access_token);
                navigate('/feed');
            })
            .catch(err => {
                setValidateError(err.message);
            });
    };

    return (
        <div className='login-page'>
            <img className='move-bg-right' src='/assets/Images/login-background.png' />
            <div className='move-box-left'>
                <LoginBox
                    setEmail={setEmail}
                    setPassword={setPassword}
                    validateError={validateError}
                    setValidateError={setValidateError}
                    handleLoginClick={handleLoginClick}
                />
            </div>
        </div>);
};


export default LoginPage;