import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/form-input.component';
import { addNewUserBill } from '../utils/fireBase';

const FormPopUp = () => {
	const [formData, setFormData] = useState({
		company: '',
		currentDue: 0,
		isSettlement: false,
		name: '',
		pastDue: 0,
		previousBill: 0,
		simplePayAmount: 0,
	});

	const {
		company,
		currentDue,
		isSettlement,
		name,
		pastDue,
		previousBill,
		simplePayAmount,
	} = formData;
	const nav = useNavigate();

	const handleOnClick = () => {
		nav(-1);
	};
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		await addNewUserBill(formData);
	};

	return (
		<div className='form-popup-container'>
			<h1>Add new bill</h1>
			<button
				className='signup-container-x-btn'
				type='button'
				onClick={handleOnClick}>
				X
			</button>
			<form onClick={handleFormSubmit}>
				<FormInput
					label='Company Name'
					type='text'
					required
					name='company'
					value={company}
				/>
				<FormInput
					label='Current Bill Amount'
					type='text'
					required
					name='currentDue'
					value={currentDue}
				/>
				<FormInput
					label='Bill Nickname'
					type='text'
					name='name'
					value={name}
				/>
			</form>
		</div>
	);
};

export default FormPopUp;
