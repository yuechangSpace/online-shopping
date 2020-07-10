import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionOverview = ( { collections } ) => (
		<div className = "collection-overview">
		{	//each collection: hat, jacket...
			collections.map(({id, ...otherCollectionProps}) => (
				<CollectionPreview key={id} {...otherCollectionProps}/>
			))
		}
		</div>
)


const mapStateToProps = state => ({
	collections: state.shop.collections
})

export default connect(mapStateToProps)(CollectionOverview)