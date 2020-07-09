import React from 'react';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/reducer/user/user.selector.js';
import { selectCartHidden } from '../../redux/reducer/cart/cart.selector.js';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';


const Header = ( { currentUser, hidden } ) =>(
	<div className='header' >
		<Link className = "logo-container" to='/online-shopping' >
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
				(<div style={{cursor:'pointer'}} onClick={()=>auth.signOut()}> Sign Out </div>)
				:(
				<Link className='option' to='/signin'>
					Sign In
				</Link>
					)

			}
			<CartIcon />
			{
				hidden?null:<CartDropdown />
			}
		</div>
	</div>
);

//pull in the state of user
const mapStateToProps = state =>{
	// //state:{
	// 	user:{currentUser:null}
	// }
	
	//root reducer(state) => user reducer(user)=> currentUser value
	// return {
	// 	currentUser: selectCurrentUser(state),
	// 	hidden: selectCartHidden(state)
	// }

	return createStructuredSelector({
		currentUser:selectCurrentUser,
		hidden:selectCartHidden
	})
}

//pull in user reducer <= root reducer
export default connect(mapStateToProps)(Header);