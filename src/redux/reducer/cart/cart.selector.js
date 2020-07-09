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
			(accmulator,currentVal)=>(accmulator+currentVal.quantity)
			,0)	
)