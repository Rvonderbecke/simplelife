import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	sendPasswordResetEmail,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

//import {  getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyBF3n-wzeN6nWSywuHS-xB4GBdNWx9j2gQ',
	authDomain: 'simplelife-f7d32.firebaseapp.com',
	projectId: 'simplelife-f7d32',
	storageBucket: 'simplelife-f7d32.appspot.com',
	messagingSenderId: '742509609988',
	appId: '1:742509609988:web:fc2fca1f401eea57c6e151',
	measurementId: 'G-53LGBJCKKF',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
//const analytics = getAnalytics(app);
provider.setCustomParameters({
	prompt: 'select_account',
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const logUserOut = () => signOut(auth);
//db stuff m
export const db = getFirestore();
//set single data value maybe??
//db.collection('users').doc(user_id).set({foo:'bar'}, {merge: true})
export const createAuthUserDoc = async (userAuth, additionalInfo) => {
	if (!userAuth) return console.log('err');
	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapShot = getDoc(userDocRef);
	if (userSnapShot) {
		//set and create a document

		//does google provide more user info
		const { displayName, email } = userAuth;
		const createAt = new Date();
		try {
			await setDoc(
				userDocRef,
				{
					displayName,
					email,
					createAt,
					bills: {
						essentialBills: [
							{
								name: 'Electric',
								company: 'Nuvera',
								currentDue: 200,
								simplePayAmount: 200,
								previousBill: 200,
								balance: 0,
								isSettlement: false,
								pastDue: 0,
							},
							{
								name: 'HousePayment',
								company: 'The V Corp',
								currentDue: 200,
								simplePayAmount: 200,
								previousBill: 200,
								balance: 0,
								pastDue: 0,
							},
							{
								name: 'Transportation',
								company: 'Chevy',
								currentDue: 200,
								simplePayAmount: 200,
								previousBill: 200,
								balance: 15000,
								pastDue: 2500,
							},
						],

						convenientBills: [
							{
								name: 'Intenet',
								company: 'Nuvera',
								currentDue: 200,
								simplePayAmount: 200,
								previousBill: 200,
								balance: 0,
								isSettlement: false,
								pastDue: 0,
							},
							{
								name: 'Media Services',
								company: 'Disney',
								currentDue: 10,
								simplePayAmount: 100,
								previousBill: 100,
								balance: 0,
								pastDue: 0,
							},
							{
								name: 'Transportation',
								company: 'chevy',
								currentDue: 0,
								simplePayAmount: 500,
								previousBill: 200,
								balance: 25000,
								pastDue: 0,
							},
						],
						luxuryBills: [
							{
								name: 'Personal Chief',
								company: 'Ramsey Enterprises',
								currentDue: 100,
								simplePayAmount: 100,
								previousBill: 200,
								balance: 0,
								isSettlement: false,
								pastDue: 1000,
							},
							{
								name: 'Cleaning Services',
								company: 'Nude Maids.com',
								currentDue: 10,
								simplePayAmount: 100,
								previousBill: 100,
								balance: 0,
								pastDue: 0,
							},
						],
					},
					...additionalInfo,
				},
				{ merge: true }
			);
		} catch (err) {
			console.log(err.code);
		}
	}
	return userDocRef;
};

//password stuff
export const resetUserPassword = ({ email }) => {
	sendPasswordResetEmail(auth, email);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	const { user } = await createUserWithEmailAndPassword(auth, email, password);
	return user;
};
