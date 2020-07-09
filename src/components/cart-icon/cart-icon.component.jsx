import React from 'react';
import { connect } from 'react-redux';

import {toggleCartDropdown} from '../../redux/reducer/cart/cart.actions.js';
import { ReactComponent as Bag } from '../../assets/shopping-bag.svg';

import { selectCartItemCount } from '../../redux/reducer/cart/cart.selector.js';
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartDropdown , itemCount}) =>(
	<div className="cart-icon" onClick={toggleCartDropdown}>
		<Bag className="shopping-icon"/>
		<span className="item-count">{itemCount}</span>
	</div>
)

//a redux selector: pull the state => select a piece of the state => and process
//we should cache the selector's value, in case of updating the component even when the piece of value does not change.
//we need re-selector: it can detect(use memorization) the value passing into our component changed or not. If not, then do not pass it into the component
const mapStateToProps = createStructuredSelector({
		itemCount: selectCartItemCount
	})

const mapDispatchToProps = dispatch =>({
	toggleCartDropdown:()=>dispatch(toggleCartDropdown())
})
export default connect(
	mapStateToProps,
	mapDispatchToProps)
	(CartIcon);