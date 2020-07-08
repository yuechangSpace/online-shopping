import './custom-button.styles.scss';
import React from 'react';

const CustomButton = ({ 
	children, GoogleSignIn, inverted, ...otherProps 
	}) => (
	//selectively render with GoogleSignIn
	<button 
	className={`${inverted ? 'inverted' : ''} ${ GoogleSignIn ? 'google-sign-in' : '' } custom-button`} 
	{...otherProps}>
		{ children }
	</button>
)
export default CustomButton;