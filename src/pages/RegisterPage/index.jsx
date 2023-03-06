import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { RegisterBox } from '../../components';
import { REGISTER } from '../../constants/ApiEndpoints';
import makeRequest from '../../utils/makeRequest';
import './RegisterPage.css';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [validateError, setValidateError] = useState('');

    const [userData, setUserData] = useState({
        fmno: '',
        userName: '',
        designation: '',
        email: '',
        password: ''
    });

    const handelRegisterClick = () => {
        makeRequest({ ...REGISTER }, {
            data: {
                'FMNO': userData.fmno,
                'userName': userData.userName,
                'email': userData.email,
                'password': userData.password,
                'designation': userData.designation
            }
        })
            .then(resp => {
                localStorage.setItem('jwtToken', resp.access_token);
                navigate('/feed');
            })
            .catch(err=>{
                setValidateError(err.message);
            });
    };


    return (
        <div className='register-page'>
            <img className='move-bg-right ' src='/assets/Images/login-background.png' />
            <div className='move-box-left' id='register-move-box-left'>
                <RegisterBox 
                    userData={userData} 
                    setUserData={setUserData} 
                    handelRegisterClick={handelRegisterClick}
                    validateError={validateError}
                    setValidateError={setValidateError} 
                />
            </div>
        </div>
    );
};

export default RegisterPage;