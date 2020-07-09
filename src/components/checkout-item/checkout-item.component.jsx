import React from 'react';
import { connect } from 'react-redux';
import { removeItem , addItem, decreaseQuantity } from '../../redux/reducer/cart/cart.actions.js';
import './checkout-item.styles.scss'

const CheckoutItem = ({ item, removeItem , addItem , decreaseQuantity }) =>{
	const { imageUrl, name , quantity , price } = item;

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt='item'/>
			</div>
			<span className="name">{name}</span>
			<div className="quantity">
				<span className='arrow' onClick={() => decreaseQuantity(item)}>&#10094;</span>
				<span className="value">{quantity}</span>
				<span className='arrow' onClick={() => addItem(item)}>&#10095;</span>
			</div>
			<span className="price">{price}</span>
			<span className="remove-button" onClick={()=>removeItem(item)}>&#10005;</span>
		</div>
	);
}
const mapDispatchToProps = dispatch =>({
  removeItem: (item)=>dispatch(removeItem(item)),
  addItem: (item)=> dispatch(addItem(item)),
  decreaseQuantity: (item) => dispatch(decreaseQuantity(item))
})
export default connect(
	null,
	mapDispatchToProps)
	(CheckoutItem);