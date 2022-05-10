import { Link, useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../../utils/fireBase';
import AuthObject from '../auth/auth.component';

const Login = () => {
	const nav = useNavigate();

	const handleGoogleButton = async () => {
		await signInWithGoogle();
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
				<h1>Simple Life</h1>
				<p> Welcome to the Simple Life</p>
				<div className='login-form-container'>
					<AuthObject />
				</div>

				<button className='btn btn-google' onClick={handleGoogleButton}>
					Sign in with Google
				</button>
				<p className='p2'>
					Not a Member?{' '}
					<Link to='/register' className='_register'>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
