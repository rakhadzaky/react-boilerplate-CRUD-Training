import React from 'react'
import LoginForm from './loginForm'
import './style.scss'

const Login = () =>{
	return(
			<div className='login_wrapper'>
				<div className='loginForm_wrapper'>
					<LoginForm />
				</div>
			</div>
		)
}

export default (Login)