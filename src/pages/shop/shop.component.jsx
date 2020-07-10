import React from 'react';
import './shop.styles.scss';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection-page/collection.component';
import { Route } from 'react-router-dom';

const ShopPage = ( { match } ) => {
	// console.log(match)
	return (
		<div className = "shop-page">
			<Route exact path={match.path} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	)
}



export default ShopPage;