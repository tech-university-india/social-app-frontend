import React from 'react';

const RegisterBox = () => {
    return ( 
        <div>
            <div className='login-box'>
                <input type='number' placeholder='FMNO' />
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
                <input type='text' placeholder='Designation' />
                <input type='text' placeholder='Enter your Mckinsey Email' />
                <input type='password' placeholder='Create a password' />
                <button>Register</button>
                <a href='/login' className='login-link-text'>Already have an account</a>
            </div>
        </div>
    );
};
 
export default RegisterBox;