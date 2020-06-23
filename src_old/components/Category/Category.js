import React from 'react';
import CategoryButton from './CategoryButton.js'
const Category = ({name})=>{
	return (
	<div className='ba pa5 mh3 Category bgPic'>
		<CategoryButton className='' title={name} dscb={'Shop Now'}/>
	</div>)
}
export default Category;