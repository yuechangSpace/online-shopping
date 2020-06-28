import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils.js';
const Header = ( { currentUser } ) =>(
	<div className='header' >
		<Link className = "logo-container" to='/' >
			<Logo className = "logo"/>
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				Shop
			</Link>
			<Link className='option' to='/contact'>
				Contact
			</Link>
			{
				currentUser?
				(<div onClick={()=>auth.signOut()}> Sign Out </div>)
				:(
				<Link className='option' to='/signin'>
					Sign in
				</Link>
					)

			}
		</div>
	</div>
)

export default Header;