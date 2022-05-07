import { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from './userContext';
import {getBillsAndDocuments } from '../utils/fireBase'


export const BillContext = createContext({
    bills: []
});



export const BillProvider = ({ children }) => {
    const { currentUser } = useContext(UserContext);
    const [bills, setBills] = useState([]);
    const value = { bills, setBills } 
    useEffect(() => {
        const launchGetBills = async () => {
            const billMap = await getBillsAndDocuments();
            setBills(billMap);
        }
        launchGetBills();
    }, [currentUser])



    return <BillContext.Provider value={value}>{children}</BillContext.Provider>
}