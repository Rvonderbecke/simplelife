import { Fragment, useContext, useLayoutEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { logUserOut } from '../../utils/fireBase';

const Navigation = () => {
	const { show, setShow, currentUser, setCurrentUser } = useContext(UserContext);
	const navigate = useNavigate();
	const location = useLocation();
	useLayoutEffect(() => {
		location.pathname === '/login' ? setShow(false) : setShow(true)
		
	},[location.pathname, setShow])
	
	const handleButtonClick = ({ target }) => {
		const des = target.innerText.toLowerCase();
		if (des === 'logout') {
			logUserOut();
			setCurrentUser(false);
			return navigate('/login');
		}
		navigate(`/${des}`);
	};
	return (
		<Fragment>
			<div className='body-container'>
				{show && (
					<div className='navigation-container'>
						<div className='navigation-container-left'>
							<h1 className='navigation-container-left-h1'>Simple Life</h1>
							<p className='navigation-container-left-p'>
								It doesn't have to be so hard{' '}
							</p>
						</div>
						<div className='navigation-container-right'>
							{currentUser ? (
								<button
									className='navigation-container-right btn btn-login'
									onClick={handleButtonClick}>
									Logout
								</button>
							) : (
								<button
									className='navigation-container-right btn btn-login'
									onClick={handleButtonClick}>
									Login
								</button>
							)}
							<button
								className='navigation-container-right btn btn-register'
								onClick={handleButtonClick}>
								Register
							</button>
						</div>
					</div>
				)}

				<Outlet />
			</div>
		</Fragment>
	);
};

export default Navigation;
