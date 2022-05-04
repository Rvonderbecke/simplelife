import { useState } from 'react';
import { resetUserPassword } from '../../utils/fireBase';

const ResetPassword = () => {
	const defaultField = {
		email: '',
	};
	const [formField, setFormField] = useState(defaultField);
	const { email } = formField;

  const handleSubmit = async (e) => {
    e.preventDefault();
		await resetUserPassword(formField);
	};
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormField({ [name]: value });
	};

	return (
		<div>
			<h1>Please enter your email</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					value={email}
					onChange={handleOnChange}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default ResetPassword;
