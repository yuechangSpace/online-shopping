//This file is used for storing any useful function used in cart reducer

//Func: addItemToCart
//Params: cartItems---existing items , itemToAdd---item to be added
export const addItemToCart = (cartItems, itemToAdd) =>{
	//if  itemToAdd existing:
		//return [...restItems, itemToAdd.quantity + 1]
	//elif itemToAdd ! existing:
		//return [...cartItems, Object.assign({},itemToAdd,{quantity:1})]
	const existingItem = cartItems.find(item=>
		item.id === itemToAdd.id
	);

	if (existingItem){
		return cartItems.map(item=>
			item.id === itemToAdd.id
			? Object.assign({}, item, {quantity:item.quantity + 1})
			: item
		);
	}

	return [...cartItems, Object.assign({},itemToAdd,{quantity:1})]
}

export const removeItem = (cartItems, itemToRemove)=>{
	//return the true item
	return cartItems.filter((cartItem)=>cartItem.id !== itemToRemove.id)
}

export const decreaseQuantity = (cartItems, itemToDecrease) =>{
	const existingItem = cartItems.find(item=>
		item.id === itemToDecrease.id
	);

	if (existingItem.quantity === 1){
		return cartItems.filter((cartItem)=>cartItem.id !== existingItem.id)
	}

	if (existingItem){
		return cartItems.map(item=>
			item.id === itemToDecrease.id
			? Object.assign({}, item, {quantity:item.quantity - 1})
			: item
		);
	}

	return [...cartItems];
}