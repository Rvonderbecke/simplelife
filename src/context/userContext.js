import { createContext, useState } from 'react';
//const path = window.location.pathname.split('/')

export const UserContext = createContext({
	currentUser: null,
	show: null,
	setCurrentUser: () => { },
	setShow: ()=>{}

});


export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [show, setShow] = useState(true);

    


	const value = { currentUser, setCurrentUser, show, setShow};


	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
