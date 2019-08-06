import React from 'react'
import Connect from '../connect'
import { GetAttrs } from '../../global/utility';

const Item = (props) => {
    const[postData] = GetAttrs(props.post,['data'])

    return(
        <div className="ui grid container">
            {postData.slice(0, 10).map((value,index) =>{
                return(
                <div className="four wide column" key={index}>
                    <div className="ui segment">
                        <h4 className="ui header">{value.title}</h4>
                        <p>{value.body}</p>
                        <button className="ui animated button" onClick={() => props.GetDetailPost(value.id)}>
                            <div className="visible content">Read More...</div>
                            <div className="hidden content">
                                <i className="right arrow icon"></i>
                            </div>
                        </button>
                    </div>
                </div>
                )
            })}
        </div>
    )
}
const states={
    post: '/home/post',
    comment: '/home/detailedPost'
}
const actions={
    GetDetailPost : (postId) => (['home/getDetailPost', postId]),
}

export default Connect(states,actions)(Item)