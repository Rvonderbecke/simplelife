import React from 'react'
import { useNavigate } from 'react-router-dom';

const FormPopUp = () => {
    const nav = useNavigate();


    const handleOnClick = () => {
		nav(-1);
	};

    return (
      <>
              <h1>Add new bill</h1>
              <button
					className='signup-container-x-btn'
					type='button'
					onClick={handleOnClick}>
					X
              </button>
      </>
              

     
  )
}

export default FormPopUp;