import React from 'react';
import './LoginBox.css';

const LoginBox = () => {
    return ( 
        <div className='login-box'>
            <input type='text' placeholder='Enter your Mckinsey Email' />
            <input type='password' placeholder='Password' />
            <button>Login</button>
            <a href='/register' className='login-link-text'>Create new account</a>
        </div>
    );
};
 
export default LoginBox;