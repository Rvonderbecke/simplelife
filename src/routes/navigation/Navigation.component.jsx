import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
	return (
		<Fragment>
			<div className='body-container'>
				<div className='navigation-container'>
					<div className='navigation-container-left'>
						<h1 className='navigation-container-left-h1'>Simple Life</h1>
						<p className='navigation-container-left-p'>
							It doesn't have to be so hard{' '}
						</p>
					</div>
					<div className='navigation-container-right'>
						<button className='navigation-container-right btn btn-login'>
							Login
						</button>
						<button className='navigation-container-right btn btn-register'>
							Register
						</button>
					</div>
				</div>
			<Outlet />
			</div>
		</Fragment>
	);
};

export default Navigation;
