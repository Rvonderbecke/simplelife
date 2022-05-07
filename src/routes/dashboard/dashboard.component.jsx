import { useContext } from 'react';
import { BillContext } from '../../context/bills.context';
import BillCard from '../../components/bill-card.component';
import Bill from '../../components/bill.component'

const Dashboard = () => {
  const { bills, setBills } = useContext(BillContext);
  


return (	<>
    {Object.keys(bills).map((billType, idx) => (
      <BillCard key={idx}>
        <h2>{billType }</h2>
        {bills[billType].map((bill, idx) => (
        <Bill key={idx} bill={bill}  />
      ))}
      </BillCard>
    ))}
	</>)
};

export default Dashboard;
