import React from 'react';
import CategoryButton from './CategoryButton.js'
const Category = ({name})=>{
	return (
	<div className='CategoryButton'>
		<CategoryButton title={name} dscb={'Shop Now'}/>
	</div>)
}
export default Category;