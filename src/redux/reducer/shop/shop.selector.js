import { createSelector } from 'reselect';


const selectShop = state => state.shop;

const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
)

export const selectCollection = collectionId => 
	createSelector(
		[selectCollections],
		collections => collections.find(
			collection => collection.title.toLowerCase() === collectionId 
		)
	)

