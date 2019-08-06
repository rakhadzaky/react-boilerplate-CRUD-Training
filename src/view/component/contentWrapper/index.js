import React from 'react'
import './style.scss'

const ContentWrapper= (props)=>{
	const {children}= props
	return(
		<div className={'component_content_wrapper ' + props.className}> 
			{children}
		</div>
		)
}

export default ContentWrapper