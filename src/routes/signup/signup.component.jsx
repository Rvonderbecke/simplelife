import { useState } from 'react';

const defaultFromFields = {
	displayName: '',
	email: '',
	streetNumber: '',
	streetName: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFromFields);
	const {
		displayName,
    email,
    zipCode,
		streetName,
		streetNumber,
		password,
		confirmPassword,
	} = formFields;

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='signup-container'>
			<h1>Sign up with email.</h1>
			<form onSubmit={() => {}}>
				<label>Display Name</label>
        <input type='text' required onChange={onChangeHandler} name='displayName' value={displayName}/>

				<label>Email</label>
				<input type='email' required onChange={onChangeHandler} name='email'value={email}/>

				<label>Street Number</label>
				<input type='text' required onChange={onChangeHandler} name='streetNumber'value={streetNumber}/>

				<label>Street Name</label>
				<input type='text' required onChange={onChangeHandler} name='streetName'value={streetName}/>

				<label>Zipcode</label>
				<input type='text' required onChange={onChangeHandler} name='zipCode'value={zipCode}/>

				<label>Password</label>
				<input type='password' required onChange={onChangeHandler} name='password'value={password}/>

				<label>Confirm Password</label>
				<input type='password' required onChange={onChangeHandler} name='confirmPassword'value={confirmPassword}/>
				<button type='submit'></button>
			</form>
		</div>
	);
};

export default SignUpForm;
