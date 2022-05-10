import { useState } from 'react';
import { ErrorBoundary } from '../../components/errorBoundry';
import { signInAuthWithEmailAndPassword } from '../../utils/fireBase';
import { Link, useNavigate } from 'react-router-dom';

const defaultFields ={
	userName: '',
	password: ''
};

const AuthObject = () => {
	const nav = useNavigate();
	const [formFields, setFormFields] = useState(defaultFields);
	
	const { userName, password } = formFields;
	const handleOnChange = (e) => {
		try {
			const { name, value } = e.target;
			setFormFields({ ...formFields, [name]: value });
		} catch (err) {
			console.log(err.message)
		}
	};
	const handleClickEvent = async (e) => {
		e.preventDefault();

		try {
			await signInAuthWithEmailAndPassword(userName, password);
			nav('/dashboard');
		} catch (err) {
			ErrorBoundary(err, err.message);
		}
	};
	return (
		<form onSubmit={handleClickEvent}>
			<input
				className='_userName'
				type='email'
				placeholder='Username'
				name='userName'
				value={userName}
				onChange={handleOnChange}
			/>
			<input
				className='_password'
				type='password'
				placeholder='Password'
				name='password'
				value={password}
				onChange={handleOnChange}
			/>
			<Link to='/resetpassword' className='forgotPassword'>
				Forgot Password
			</Link>
			<button className='btn btn-signIn'>
				Sign In
			</button>
		</form>
	);
};

export default AuthObject;
