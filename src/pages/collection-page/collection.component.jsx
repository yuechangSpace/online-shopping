import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/reducer/shop/shop.selector.js';

const CollectionPage = ({collection}) => {
	// console.log(match.params.collectionId)
	console.log(collection)
	return (
		<div className="collections">
			Category
		</div>
	)
}

//not memoriezed selector, because 'ownProps' can change, this component will refresh even with the same "ownProps"
//To inprove, use the lodash.memoize lib
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);