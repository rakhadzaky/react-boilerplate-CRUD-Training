import React from 'react'
import './style.scss'
import { Icon } from "@blueprintjs/core";

function Pagination({ total = 50, perPage = 10, currentPage = 1, className }) {
	const totalPage = Math.ceil(total / perPage)
	let pages
	if ((totalPage - currentPage) <= 1)
		pages = [currentPage-1, currentPage, totalPage]
	else if ((totalPage - currentPage) <= 2)
		pages = [currentPage, currentPage + 1, totalPage]
	else
		pages = [currentPage, currentPage + 1, "...", totalPage]
	const pageRendered = pages.map((page, i) => (
		<div className={currentPage && ' component_active component_nums'}
		     key={i}>{page}</div>
	))	
	return (
		<div className={ "component_pagination " + className }>
			<div className="component_arrow component_left">
				<Icon icon="chevron-left"/>
			</div>
			<div className="component_pagination_number">
				{pageRendered}
			</div>
			<div className="component_arrow component_right">
				<Icon icon="chevron-right"/>
			</div>
		</div>
	)
}


export default Pagination