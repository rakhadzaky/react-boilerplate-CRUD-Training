import React from 'react'
import './style.scss'

// btnType
// - button_primary
// - button_default
// - button_noBorder
// - button_disable
// - button_danger


export function ButtonDisable({text}){
	return(
		<div className='button_disable'> {text} </div>
	)
}

const ButtonLoading= ({text}) =>{
	const loading = "/img/spinner.gif"
	return(
		<div className='button_wrapper + button_loading'>
			Loading 
			<img alt="null" src={loading} className='button_loadingGif'/>
		</div>
	)
}

export function Button({type, className, text, isLoading=false, onClick}){
	return(
		<div>
		{
			isLoading ?
			<ButtonLoading text={text} /> 
			: 
			<div className={ 'button_wrapper '+  type} onClick={onClick}>{text}</div>
		}
		</div>
		
	)
}