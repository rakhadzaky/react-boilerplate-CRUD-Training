import React from 'react'
import {Button} from '../component/button'
import Connect from '../connect'
import {GetAttrs} from '../../global/utility'
import './style.scss'

const LoginForm = (props) =>{
	const [username, pass, isFetching] = GetAttrs(props.login,['username', 'password', 'isFetching'])
	
	return(
		<div className='login_form'>
			<div className='login_title'>
				<img src='/img/logo.png' alt="logo" className='login_logo'/>
			</div>
			<div className='login_inputForm'>
				<input type='text' className='login_inputBox' placeholder="username" value={username} onChange={props.ChangeForm('username')}/>
			</div>
			<div className='login_inputForm'>
				<input type='password' className='login_inputBox' placeholder="password" value={pass} onChange={props.ChangeForm('password')}/>
			</div>
			<div className='login_buttonWrapper'>
				<Button type={'button_primary'} text={'OK'} onClick={props.Login} isLoading={isFetching}/>
				<Button type={'button_primary'} text={'home'} onClick={props.ToDashboard} />
			</div>
		</div>
		)
}
const states={
	login : '/login/login',
}
const actions={
	ChangeForm :(attr) => (e)=> (['login/changeForm', attr, e.target.value]),
	ToDashboard : () => (['push', `/post`]),
	Login :() => (['login/login'])
}

export default Connect(states, actions)(LoginForm)