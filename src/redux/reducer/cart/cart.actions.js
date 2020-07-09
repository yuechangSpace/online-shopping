import CartActionTypes from './cart.types.js';

export const toggleCartDropdown = ()=>({
	type:CartActionTypes.toggleCartDropdown
})

export const addItem = item =>({
	type:CartActionTypes.addItem,
	payload:item
})

export const removeItem = item =>({
	type:CartActionTypes.removeItem,
	payload:item
})

export const decreaseQuantity = item =>({
	type:CartActionTypes.decreaseQuantity,
	payload:item
})