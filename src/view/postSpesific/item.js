import React from 'react'
import Connect from '../connect'
import { GetAttrs } from '../../global/utility';

const Item = (props) => {
    const[postData] = GetAttrs(props.post,['data'])
    const[userId, name, email, address] = GetAttrs(props.user,['userId', 'name', 'email', 'address'])

    return(
        <div className="ui grid container">
            {postData.filter(post => post.userId == userId).map((value,index) =>{
                return(
                <div className="four wide column" key={index}>
                    <div className="ui segment">
                        <h4 className="ui header">{value.userId} {value.title}</h4>
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
    post: '/post/post',
    user: '/user/detailedUser'
}
const actions={
    GetDetailPost : (postId) => (['post/getDetailPost', postId]),
}

export default Connect(states,actions)(Item)