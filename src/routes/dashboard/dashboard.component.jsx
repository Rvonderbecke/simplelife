import { useContext, useState } from 'react';
import { BillContext } from '../../context/bills.context';
import BillCard from '../../components/bill-card.component';
import Bill from '../../components/bill.component';
import FormPopUp from '../../components/form-popup.conponent';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
	const { bills, setBills } = useContext(BillContext);
	const [ popUp, setPopUp ] = useState(false);

	const handlePopUp = async () => {
		setPopUp(true);
	};

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
							<FormPopUp />
					</div>
				</div>
			)}

			<Outlet />
		</>
	);
};

export default Dashboard;
