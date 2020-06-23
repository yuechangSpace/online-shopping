import React from 'react';
const CategoryButton = ({ title, dscb })=>{
	return  <div className='ba  pa2 grow shadow-5 w-100 CategoryButton'>
				<h1>{title}</h1>
				<p>{dscb}</p>
			</div>
}
export default CategoryButton;