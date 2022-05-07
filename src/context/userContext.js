import { createContext, useState, useEffect } from 'react';
import { createAuthUserDoc, onAuthStateChangedListener } from '../utils/fireBase';
//const path = window.location.pathname.split('/')

export const UserContext = createContext({
	currentUser: null,
	show: null,
	setCurrentUser: () => {},
	setShow: () => {},
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [show, setShow] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createAuthUserDoc(user)
			}
			setCurrentUser(user)
		});
		return unsubscribe;
	}, []);

	const value = { currentUser, setCurrentUser, show, setShow };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
