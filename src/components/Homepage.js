import React from 'react';
import 'tachyons';
import Category from './Category.js'
import './Category.css';
import  bg from '../asset/hat.jpg';
const Homepage = ()=>{
	let Categories = [];
	let womenNmen = [];
	for (let i = 0; i < 3; i++){
		Categories.push(<Category className='w-30 ba' key={i} name={'hat'}  />)
	}
	for (let i = 3; i < 5; i++){
		womenNmen.push(<Category key={i} name={'man'} />)
	}
	return (
	<div className='menue'>
		<div className=' flex justify-center w-100 justify-around'>
		{Categories}
		</div>
		<div className='flex justify-center'>
		{womenNmen}
		</div>
	</div>)
}

export default Homepage;