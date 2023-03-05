import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { RegisterBox } from '../../components';
import { REGISTER } from '../../constants/ApiEndpoints';
import makeRequest from '../../utils/makeRequest';
import './RegisterPage.css';

const RegisterPage = () => {

    const [userData, setUserData] = useState({
        fmno: '',
        firstName: '',
        lastName: '',
        designation: '',
        email: '',
        password: ''
    });

    const handelRegisterClick = () => {
        makeRequest({ ...REGISTER }, {
            data: {
                'FMNO': userData.fmno,
                'userName': userData.firstName + ' ' + userData.lastName,
                'email': userData.email,
                'password': userData.password,
                'designation': userData.designation
            }
        })
            .then(resp => {
                localStorage.setItem('jwtToken', resp.access_token);
                Navigate('/home');
            });
    };


    return (
        <div className='register-page'>
            <img className='move-bg-right ' src='/assets/Images/login-background.png' />
            <div className='move-box-left' id='register-move-box-left'>
                <RegisterBox userData={userData} setUserData={setUserData} handelRegisterClick={handelRegisterClick} />
            </div>
        </div>
    );
};

export default RegisterPage;