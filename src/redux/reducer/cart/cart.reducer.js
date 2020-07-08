import CartActionTypes from './cart.types.js';

const INITIAL_STATE = {
	hidden:true,
	cartItems:[]
}

const cartReducer = ( state = INITIAL_STATE, action )=>{
	switch(action.type){
		case CartActionTypes.toggleCartDropdown:
			return {
				...state,
				hidden:!state.hidden
			}
		case CartActionTypes.addItem:
			return {
				...state,
				cartItems:[...state.cartItems,action.payload]
		}
		default: return state;
	}
}

export default cartReducer;