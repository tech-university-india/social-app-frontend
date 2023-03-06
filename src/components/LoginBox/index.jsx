import { PropTypes } from 'prop-types';
import React from 'react';
import './LoginBox.css';

const LoginBox = (props) => {

    const handleUserNameChange = (e) => {
        props.setEmail(e.target.value);
        props.setValidateError('');
    };
    
    const handlePasswordChange = (e) => {
        props.setPassword(e.target.value);
        props.setValidateError('');
    };

    return (
        <div className='login-box'>
            
            <input type='text' placeholder='Enter your Mckinsey Email' onChange={handleUserNameChange} />
            <input type='password' placeholder='Password' onChange={handlePasswordChange} />
            
            <div className='error-message'>{props.validateError}</div>
            
            <button onClick={props.handleLoginClick} >Login</button>
            <a href='/register' className='login-link-text'>Create new account</a>
        
        </div>
    );
    
};

export default LoginBox;

LoginBox.propTypes = {
    setEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    handleLoginClick: PropTypes.func.isRequired,
    validateError: PropTypes.string,
    setValidateError: PropTypes.func.isRequired
};