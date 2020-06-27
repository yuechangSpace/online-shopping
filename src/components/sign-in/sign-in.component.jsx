import React from 'react';
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
class Signin extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:''
		}
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email:'', password:'' })
	}
	handleChange = (event) => {
		console.log(event.target.value)
		const { value, name } = event.target;
		this.setState({[name]:value});
	}
	render(){
		return (
			<div className='signin'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form>
					<FormInput 
					name='email' 
					type='email' 
					value={this.state.email} 
					onChange={this.handleChange} 
					label='Email'
					required/>

					<FormInput 
					name='password' 
					type='password' 
					value={this.state.password} 
					onChange={this.handleChange} 
					label='Password'
					required/>
					<CustomButton  onSubmit={this.handleSubmit}> Sign In</CustomButton>
				</form>
			</div>
		)
	}
}

export default Signin;