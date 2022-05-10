import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { BillContext } from '../../context/bills.context';
import { addNewUserBill } from '../../utils/fireBase';
import BillCard from '../../components/bill-card.component';
import Bill from '../../components/bill.component';
import FormPopUp from '../../components/form-popup.conponent';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
	const { bills, setBills } = useContext(BillContext);
	const [ popUp, setPopUp ] = useState(false);
	const [formData, setFormData] = useState({
		company: '',
		currentDue: 0,
		isSettlement: false,
		name: '',
		pastDue: 0,
		previousBill: 0,
		simplePayAmount: 0,
	});

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		await addNewUserBill(formData);
	};
	const handlePopUp = async () => {
		setPopUp(true);
	};
	useLayoutEffect(() => {}, [setFormData]);

	return (
		<>
			{Object.keys(bills).map((billType, idx) => (
				<BillCard key={idx}>
					<h2>{billType}</h2>
					{bills[billType].map((bill, idx) => (
						<Bill key={idx} bill={bill} />
					))}
					<button onClick={handlePopUp}>+</button>
				</BillCard>
			))}

			{popUp && (
				<div className='screenCover'>
					<div className='signup-container'>
						<form onClick={handleFormSubmit}>
							<FormPopUp />
						</form>
					</div>
				</div>
			)}

			<Outlet />
		</>
	);
};

export default Dashboard;
