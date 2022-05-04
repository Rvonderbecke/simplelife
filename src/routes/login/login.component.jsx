import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../../utils/fireBase';
import AuthObject from '../auth/auth.component';

const Login = () => {
	const { setCurrentUser, setShow, show, currentUser } = useContext(UserContext);
	const nav = useNavigate();

	
	const handleGoogleButton = async () => {
		const { user } = await signInWithGoogle();
		await setCurrentUser(user);
		nav('/dashboard');
	};
	return (
		<div className='login-container'>
			<div className='login-container-left'>
				<img
					src='images/Picture1.svg'
					alt=''
					className='login-container-left-img'></img>
				<p className='login-container-left-p'>Life doesn't have to be hard </p>
			</div>
			<div className='login-container-right'>
				<h1 className='login-container-right-h1'>Simple Life</h1>
				<p className='login-container-right-p1'> Welcome to the Simple Life</p>
				<div className='login-container-form'>
					<AuthObject />
				</div>
				<div className='lineBreak'>
					<span className='or'>or</span>
				</div>
				<button
					className='login-container-right-btn btn btn-google'
					onClick={handleGoogleButton}>
					Sign in with Google
				</button>
				<p className='login-container-right-p2'>
					Not a Member? <Link to='/register' className='login-container-register'>Register</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
