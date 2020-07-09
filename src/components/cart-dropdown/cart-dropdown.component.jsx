import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/reducer/cart/cart.selector.js';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss'


const CartDropdown = ({ cartItems }) =>(
	<div className="cart-dropdown" >
		<div className="cart-items" >
		{	cartItems.map(item=>
				<CartItem id={item.id} item={item} />
			)
		}
		</div>
		<CustomButton>Go To Checkout!</CustomButton>
	</div>
)	

const mapStateToProps = createStructuredSelector({
	cartItems:selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);