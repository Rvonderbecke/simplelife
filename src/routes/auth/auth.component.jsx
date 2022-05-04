import React from 'react';
import { Link } from 'react-router-dom';

const AuthObject = () => {


	const handleClickEvent = () => {
		
	}
	return (
		<>
			<input className="login-container-form-userName" type='text' placeholder='Username' />
			<input className="login-container-form-password" type='text' placeholder='Password' />
			<Link to='/resetpassword' className="forgotPassword">Forgot Password</Link>
			<button type="button" className='login-container-right-btn2 btn btn-signIn' onClick={handleClickEvent}>Sign In</button>
		</>
	);
};

export default AuthObject;
