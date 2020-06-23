import React from 'react';
import Navigation from './Navigation.js'
import Logo from './Logo.js'
const Header = ()=>{
	return (
	<div className='flex' >
		<Logo className='Logo'/>
		<Navigation className='Navigation'/>
	</div>)
}
export default Header;