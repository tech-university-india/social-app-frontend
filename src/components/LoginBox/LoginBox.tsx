import React from 'react';
import './LoginBox.css';

interface loginDTO {
    access_token: string
}

const LoginBox = () => {
    const handleLoginClick = async () =>{
        
        const loginResponse: loginDTO = await fetch('http://localhost:4000/auth/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'email':'exampleuser1@example.com',
                'password':'pass@123'
            })
        });
        if(loginResponse.status !== 200) {
            console.log('Error');
            return;
        }
        const accessToken: string = (await loginResponse.json())['access_token'];
        console.log(accessToken);
    };
    return ( 
        <div className='login-box'>
            <input type='text' placeholder='Enter your Mckinsey Email' />
            <input type='password' placeholder='Password' />
            <button onClick={handleLoginClick}>Login</button>
            <a href='/register' className='login-link-text'>Create new account</a>
        </div>
    );
};
 
export default LoginBox;