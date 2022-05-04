import React from 'react';

const Home = () => {
	return (
		<div className='home-container'>
			<div className='home-container-left'>
				<p className='home-container-left-p'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					obcaecati nihil illo sapiente placeat ducimus molestias doloremque
					officia reprehenderit doloribus atque nulla error laudantium velit
					minus perferendis neque, voluptatum ipsam?
				</p>
				<img src='images/Picture1.svg' alt='' className='home-container-left-img'></img>
			</div>
			<div className='home-container-right'>
				<p className='home-container-right-p'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					obcaecati nihil illo sapiente placeat ducimus molestias doloremque
					officia reprehenderit doloribus atque nulla error laudantium velit
					minus perferendis neque, voluptatum ipsam?
				</p>
				<button className='home-container-right-btn btn btn-getStarted'>
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Home;
