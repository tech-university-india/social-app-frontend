import React from 'react';
import { PropTypes } from 'prop-types';
import './RegisterBox.css';
const RegisterBox = (props) => {

    const handleInputChange = (e) => {
        props.setUserData({
            ...props.userData,
            [e.target.name]: e.target.value
        });
    };

    return ( 
        <div>
            <div className='register-box'>
                <input type='number' name='fmno' placeholder='FMNO' onChange={handleInputChange} />
                <input type='text' name='firstName' placeholder='First Name' onChange={handleInputChange} />
                <input type='text' name='lastName' placeholder='Last Name' onChange={handleInputChange} />
                <input type='text' name='designation' placeholder='Designation' onChange={handleInputChange} />
                <input type='text' name='email' placeholder='Enter your Mckinsey Email' onChange={handleInputChange} />
                <input type='password' name='password' placeholder='Create a password' onChange={handleInputChange} />
                <button onClick={props.handelRegisterClick} >Register</button>
                <a href='/feed' className='register-link-text'>Already have an account</a>
            </div>
        </div>
    );
};
 
export default RegisterBox;

RegisterBox.propTypes = {
    userData: PropTypes.object.isRequired,
    setUserData: PropTypes.func.isRequired,
    handelRegisterClick: PropTypes.func.isRequired
};