import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	sendPasswordResetEmail,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

//import {  getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyA9NzPeLs7g8xWo17DNHWU7rKX_mWNGrqI',
	authDomain: 'simple-life-app.firebaseapp.com',
	projectId: 'simple-life-app',
	storageBucket: 'simple-life-app.appspot.com',
	messagingSenderId: '1034500165332',
	appId: '1:1034500165332:web:e31e7b573e8d72b2267541',
	measurementId: 'G-MDBPHP7M3T',
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
export const createAuthUserDoc = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	console.log(userDocRef);

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
					name: displayName,
					email,
					createAt,
					address: [
						{
							streetNumber: 132,
							streetName: '',
							zipCode: 51005,
						},
					],
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
				},
				{ merge: true }
			);
		} catch (err) {
			console.log(err.message);
		}
	}
	return userDocRef;
};

//password stuff
export const resetUserPassword = ({ email }) => {
	sendPasswordResetEmail(auth, email);
};
