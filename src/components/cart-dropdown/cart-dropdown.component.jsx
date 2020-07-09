import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartDropdown } from '../../redux/reducer/cart/cart.actions.js';

import { selectCartItems } from '../../redux/reducer/cart/cart.selector.js';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss'


const CartDropdown = ({ cartItems , history , dispatch }) =>(
	<div className="cart-dropdown" >
		<div className="cart-items" >
		{	
			cartItems.length ?
			cartItems.map(item=>
				<CartItem key={item.id} item={item} />
			)
			:
			<span className="empty-message">Empty Cart</span>
		}
		</div>
		<CustomButton onClick={()=> {
			history.push('/checkout') 
			dispatch(toggleCartDropdown())
		}}>
			Go To Checkout!
		</CustomButton>
	</div>
)	

const mapStateToProps = createStructuredSelector({
	cartItems:selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));