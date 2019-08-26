import React from 'react'
import Item from './item'
import Connect from '../connect'

const ListPost = ({isLoading=false}) =>{
    return(
        <div>
            {
                isLoading ?
                <div className="ui">
                    <div className="ui active inverted dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                </div>
                :
                <div>
                    <Item />
                </div>
                
            }
        </div>
    )
}

export default (ListPost)