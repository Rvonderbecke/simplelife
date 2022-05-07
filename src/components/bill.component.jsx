import React from 'react'
import BillCard from '../components/bill-card.component'

const Bill = ({ bill }) => {
    const { name, company, simplePayAmount } = bill;
    return (
      <div className="bill-container">
            <p>{name}, Provided by {company} | Next Payment: {simplePayAmount}</p>
      
      </div>
  )
}

export default Bill;
