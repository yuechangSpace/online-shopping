import './custom-button.styles.scss';
import React from 'react';

const CustomButton = ({ children, GoogleSignIn, ...otherProps }) =>(
	//selectively render with GoogleSignIn
	<button 
	className={`${ GoogleSignIn ? 'google-sign-in' : '' } custom-button`} 
	{...otherProps}>
		{ children }
	</button>
)
export default CustomButton;