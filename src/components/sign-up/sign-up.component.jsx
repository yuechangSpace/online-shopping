import React from 'react';
import FormInput from '../form-input/form-input.component'
import './sign-up.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { getUserProfile, auth } from '../../firebase/firebase.utils.js';

class Signup extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:'',
			displayName:'',
			confirmedPassword:''
		}
	}
	handleSubmit = async (event) => {
		const { email, password, displayName, confirmedPassword } = this.state;
		event.preventDefault();
		if (password !== confirmedPassword) 
			alert("Passwords don't match")

	    try {
	      const { user } = await auth.createUserWithEmailAndPassword(
	        email,
	        password
	      );

	      await getUserProfile(user, { displayName });

	      this.setState({
	        displayName: '',
	        email: '',
	        password: '',
	        confirmPassword: ''
	      });
	    } catch (error) {
	      console.error(error);
	    }
	  }
	
	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({[name]:value});
	}
	render(){
		return (
			<div className='signup'>
				<h2>I do not have an account</h2>
				<span>Sign up with your email and password</span>

				<form>
					<FormInput 
					name='name' 
					type='name' 
					value={this.state.displayName} 
					onChange={this.handleChange} 
					label='Name'
					required/>

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

					<FormInput 
					name='confirmedPassword' 
					type='password' 
					value={this.state.confirmedPassword} 
					onChange={this.handleChange} 
					label='ConfirmedPassword'
					required/>

					<div className="group-buttons">
						<CustomButton  onClick={this.handleSubmit}> Sign Up </CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default Signup;