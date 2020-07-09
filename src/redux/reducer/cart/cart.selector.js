import { createSelector } from 'reselect';

const selectCart = state => state.cart;

//input selector: selectCart
export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
	[selectCartItems],
	cartItems=> cartItems.reduce(
			(accmulator,currentVal)=>
			(accmulator+currentVal.quantity)
			,0)	
)

export const selectCartTotal = createSelector(
	[selectCartItems],
	cartItems=> cartItems.reduce((accmulator,currentVal)=>
		accmulator+currentVal.quantity*currentVal.price
		,0)
)

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
)