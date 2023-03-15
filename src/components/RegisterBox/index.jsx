import React from 'react';
import { PropTypes } from 'prop-types';
import './RegisterBox.css';
const RegisterBox = (props) => {

	const handleInputChange = (e) => {
		props.setUserData({
			...props.userData,
			[e.target.name]: e.target.value
		});
		props.setValidateError('');
	};

	return (
		<div>
			<div className='register-box'>
				<input type='number' name='fmno' placeholder='FMNO' onChange={handleInputChange} />
				<input type='text' name='userName' placeholder='User Name' onChange={handleInputChange} />
				<input type='text' name='designation' placeholder='Designation' onChange={handleInputChange} />
				<input type='text' name='email' placeholder='Enter your Mckinsey Email' onChange={handleInputChange} />
				<input type='password' name='password' placeholder='Create a password' onChange={handleInputChange} />

				<div className='error-message'>{props.validateError}</div>

				<button onClick={props.handelRegisterClick} >Register</button>
				<a href='/login' className='register-link-text'>Already have an account? Login</a>
			</div>
		</div>
	);
};

export default RegisterBox;

RegisterBox.propTypes = {
	userData: PropTypes.object.isRequired,
	setUserData: PropTypes.func.isRequired,
	handelRegisterClick: PropTypes.func.isRequired,
	validateError: PropTypes.string,
	setValidateError: PropTypes.func.isRequired
};