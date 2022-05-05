import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { createAuthUserWithEmailAndPassword, createAuthUserDoc } from '../../utils/fireBase';

const defaultFromFields = {
	displayName: '',
	email: '',
	phone: '',
	streetNumber: '',
	streetName: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const { setCurrentUser } = useContext(UserContext);
	const [formFields, setFormFields] = useState(defaultFromFields);
	const nav = useNavigate();
	const {
		displayName,
		email,
		zipCode,
		phone,
		streetName,
		streetNumber,
		password,
		confirmPassword,
	} = formFields;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password} = formFields;
		try {
			const  user  = await createAuthUserWithEmailAndPassword(email, password);
			setCurrentUser(user);
			createAuthUserDoc(user, formFields);
			nav('/dashboard');

		} catch (err) {
			console.log(err.message)
		}
	};

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
		// still need to find last entry console.log(formFields)
	}
	return (
		<div className='screenCover'>
			<div className='signup-container'>
				<h1 className='signup-container-h1'>Register</h1>
				<p className='signup-container-p'>Welcome to the Simple Life</p>
				<form className='signup-container-form' onSubmit={handleSubmit}>
					<input
						className='signup-container-form-name'
						type='text'
						required
						onChange={onChangeHandler}
						name='displayName'
						value={displayName}
						placeholder='Display Name*'
					/>


					<input
						className='signup-container-form-streetNum'
						type='text'
						required
						onChange={onChangeHandler}
						name='streetNumber'
						value={streetNumber}
						placeholder='Street Number*'
					/>

					<input
						className='signup-container-form-streetName'
						type='text'
						required
						onChange={onChangeHandler}
						name='streetName'
						value={streetName}
						placeholder='Street Name*'
					/>
					<input
						className='signup-container-form-apt'
						type='text'
						name='apt'
						placeholder='Apt./Ste.'
					/>
					<input
						className='signup-container-form-email'
						type='email'
						required
						onChange={onChangeHandler}
						name='email'
						value={email}
						placeholder='Email Address*'
					/>
					<input
						className='signup-container-form-city'
						type='text'
						name='city'
						placeholder='City'
					/>

					<input
						className='signup-container-form-confEmail'
						type='email'
						name='confEmail'
						placeholder='Confirm Email Address*'
					/>
					<input
						className='signup-container-form-state'
						type='text'
						name='state'
						placeholder='State'
					/>
					<input
						className='signup-container-form-zip'
						type='text'
						required
						onChange={onChangeHandler}
						name='zipCode'
						value={zipCode}
						placeholder='Zip Code*'
					/>

					<input
						className='signup-container-form-password'
						type='password'
						required
						onChange={onChangeHandler}
						name='password'
						value={password}
						placeholder='Password*'
					/>
					<input
						className='signup-container-form-phone'
						type='text'
						required
						onChange={onChangeHandler}
						name='phone'
						value={phone}
						placeholder='Phone Number*'
					/>
					<input
						className='signup-container-form-confPassword'
						type='password'
						required
						onChange={onChangeHandler}
						name='confirmPassword'
						value={confirmPassword}
						placeholder='Confirm Password*'
					/>
					<button className='signup-container-form-btn' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUpForm;
