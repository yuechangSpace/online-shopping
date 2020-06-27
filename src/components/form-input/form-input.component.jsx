import React from 'react';
import './form-input.styles.scss';
const FormInput = ( { label, value, handleChange,...otherProps} )=>{
	return (
		<div className='group'>
			<input className='form-input' onChange={handleChange}  { ...otherProps }/>
			{
				label?(
					//when haven't input, selectively style with 'shrink'
					<label className={`${value === 0? 'shrink':''} form-input-label`}> {label}
					</label>)
					:null
			}
		</div>
	)
}
export default FormInput;