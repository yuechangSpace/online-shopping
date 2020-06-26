import React from 'react';
import './shop.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data.js'
class ShopPage extends React.Component {
	constructor(){
		super();
		this.state = { 
			collections: SHOP_DATA
		};
	}
	render(){
		const { collections } = this.state;
		return(
		<div className = "shop-page">
		{	//each collection: hat, jacket...
			collections.map(({id, ...otherCollectionProps}) => (
				<CollectionPreview key={id} {...otherCollectionProps}/>
				))
		}
		</div>)
	}
}

export default ShopPage;