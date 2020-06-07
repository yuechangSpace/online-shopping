import React from 'react';
const CategoryButton = ({title,dscb})=>{
	return  <div className='ba  pa2 w-30'>
				<h1>{title}</h1>
				<p>{dscb}</p>
			</div>
}
export default CategoryButton;