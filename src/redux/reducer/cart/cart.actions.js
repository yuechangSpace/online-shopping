import CartActionTypes from './cart.types.js';

export const toggleCartDropdown = ()=>({
	type:CartActionTypes.toggleCartDropdown
})

export const addItem = item =>({
	type:CartActionTypes.addItem,
	payload:item
})
