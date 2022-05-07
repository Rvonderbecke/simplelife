import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	createAuthUserWithEmailAndPassword,
	createAuthUserDoc,
} from '../../utils/fireBase';
import FormInput from '../../components/form-input.component';
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
	const [formFields, setFormFields] = useState(defaultFromFields);
	const resetFormFields = () => {
		setFormFields(defaultFromFields);
	};

	const nav = useNavigate();
	const {
		displayName,
		email,
		confEmail,
		zipCode,
		phone,
		streetName,
		streetNumber,
		password,
		confirmPassword,
	} = formFields;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = formFields;
		try {
			const user = await createAuthUserWithEmailAndPassword(email, password);
			await createAuthUserDoc(user, formFields);
			resetFormFields();
			nav('/dashboard');
		} catch (err) {
			console.log(err.message);
		}
	};

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
		// still need to find last entry console.log(formFields)
	};
	const handleOnClick = () => {
		nav(-1);
	};
	return (
		<div className='screenCover'>
			<div className='signup-container'>
				<h1 className='signup-container-h1'>Register</h1>
				<button type='button' onClick={handleOnClick}>
					X
				</button>
				<p className='signup-container-p'>Welcome to the Simple Life</p>
				<form className='signup-container-form' onSubmit={handleSubmit}>
					<FormInput
						label='Display Name'
						type='text'
						required
						onChange={onChangeHandler}
						name='displayName'
						value={displayName}
					/>

					<FormInput
						label='Number'
						type='text'
						required
						onChange={onChangeHandler}
						name='streetNumber'
						value={streetNumber}
					/>

					<FormInput
						label='Street Name'
						type='text'
						required
						onChange={onChangeHandler}
						name='streetName'
						value={streetName}
					/>
					<FormInput label='Apt' type='text' name='apt' />
					<FormInput
						label='Email'
						type='email'
						required
						onChange={onChangeHandler}
						name='email'
						value={email}
					/>

					<FormInput
						label='Confirm Email'
						type='email'
						name='confEmail'
						value={confEmail}
					/>
					<FormInput
						label='ZipCode'
						type='text'
						required
						onChange={onChangeHandler}
						name='zipCode'
						value={zipCode}
					/>

					<FormInput
						label='Password'
						type='password'
						required
						onChange={onChangeHandler}
						name='password'
						value={password}
					/>
					<FormInput
						label='Phone'
						type='text'
						required
						onChange={onChangeHandler}
						name='phone'
						value={phone}
					/>
					<FormInput
						label='Confirm Password'
						type='password'
						required
						onChange={onChangeHandler}
						name='confirmPassword'
						value={confirmPassword}
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
