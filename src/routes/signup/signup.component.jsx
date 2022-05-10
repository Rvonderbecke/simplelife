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
	const [formState, setFormState] = useState(0);
	const resetFormFields = () => {
		setFormFields(defaultFromFields);
	};

	const nav = useNavigate();
	const {
		displayName,
		email,
		dob,
		lastFour,
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
	const handleBtnClick = (e) => {
		const { name } = e.target;
		setFormState(() => {
			return {
				formState:
					name === 'next'
						? setFormState(formState + 1)
						: setFormState(formState - 1),
			};
		});
	};
	return (
		<div className='screenCover'>
			<div className='signup-container'>
				<button
					className='signup-container-x-btn'
					type='button'
					onClick={handleOnClick}>
					X
				</button>
				<h1 className='signup-container-h1'>Register</h1>
				<form className='signup-container-form' onSubmit={handleSubmit}>
					{formState === 0 && (
						<>
							<p className='signup-container-p'>
								Let's get to know eachother. My name is Simple, what's yours?
							</p>

							<FormInput
								label='Full Name'
								type='text'
								required
								onChange={onChangeHandler}
								name='displayName'
								value={displayName}
							/>
							<FormInput
								label='Email'
								type='email'
								required
								onChange={onChangeHandler}
								name='email'
								value={email}
							/>
							<FormInput
								label='Phone'
								type='text'
								required
								onChange={onChangeHandler}
								name='phone'
								value={phone}
							/>
						</>
					)}
					{formState === 1 && (
						<>
							<p className='signup-container-p'>
								Let's make sure we are simplifying the right person.
							</p>

							<FormInput
								type='date'
								required
								onChange={onChangeHandler}
								name='dob'
								value={dob}
							/>
							<FormInput
								label='Last four of Social'
								type='password'
								required
								onChange={onChangeHandler}
								name='lastFour'
								value={lastFour}
							/>
						</>
					)}
					{formState === 2 && (
						<>
							<p className='signup-container-p'>
								Please share your address so we may handle the tasks you assign to
								us.
							</p>

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
								label='ZipCode'
								type='text'
								required
								onChange={onChangeHandler}
								name='zipCode'
								value={zipCode}
							/>
						</>
					)}
					{formState === 3 && (
						<>
							<p className='signup-container-p'>
								Last step is to keep your info saved. Pick a strong password!
							</p>

							<FormInput
								label='Password'
								type='password'
								required
								onChange={onChangeHandler}
								name='password'
								value={password}
							/>
							<FormInput
								label='Confirm Password'
								type='password'
								required
								onChange={onChangeHandler}
								name='confirmPassword'
								value={confirmPassword}
							/>
						</>
					)}

					{formState === 4 ? (
						<>
														<p className='signup-container-p'>
								I can't wait to help you enjoy life! Give me as many responsibilities as you like, I can pay bills with your money or mine if you need a hand, no stress and as little or as much evolvement that you want. the best part might be I onyl make money if you save some, so lets get to work!
							</p>

							<button className='signup-container-form-btn' type='submit'>
								Submit
							</button>
						</>
					) : (
						<div className='signup-container-btn-prevnext'>
							<button onClick={handleBtnClick} className='btn prev'name='prev'>
								Previous
							</button>
							<button onClick={handleBtnClick} className='btn next' name='next'>
								Next
							</button>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default SignUpForm;
