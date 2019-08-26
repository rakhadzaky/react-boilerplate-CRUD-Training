import React from 'react'
import { GetAttrs } from '../../global/utility';
import Connect from '../connect';
import Header from '../component/header'

const DetailPost = (props) => {
    const [postId, title, body, comments, isFetching] = GetAttrs(props.detailPost,['postId', 'title','body','comments','isFetching'])

    return(
        <div>
            <Header loginLink={props.toLogin} postLink={props.toPost} userLink={props.toUser}/>
            <div className="ui hidden divider"></div>
            {
                isFetching ?
                <div className="ui">
                    <div className="ui active inverted dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                </div>
                :
                <div>
                    <div className="ui grid container">
                        <div className="ui segment">
                            <h4 className="ui header">{title}</h4>
                            <p>{body}</p>
                            <button className="ui right floated red icon button" data-inverted="" data-tooltip="Delete Post Data" data-position="bottom center" onClick={() => props.DeletePostData(postId)}>
                                <i className="trash alternate outline icon"></i>
                            </button>
                            <button className="ui right floated orange icon button" data-inverted="" data-tooltip="Edit Post Data" data-position="bottom center" onClick={() => props.EditPostData(postId)}>
                                <i className="edit outline icon"></i>
                            </button>
                        </div>
                    </div>
                    <div className="ui hidden divider"></div>
                    <div className="ui comments container">
                        <h3 className="ui dividing header">Comments</h3>
                        {
                            comments.slice(0,20).map((value, index)=>{
                                return(
                                    <div className="comment" key={index}>
                                        <div className="content">
                                        <a className="author">{value.name}</a>
                                        <div className="metadata">
                                            <span className="date">{value.email}</span>
                                        </div>
                                        <div className="text">
                                            {value.body}
                                        </div>
                                        <div className="actions">
                                            <a className="reply">Reply</a>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
            
        </div>
    )
}

const states={
    detailPost : '/post/detailedPost'
}

const actions={
    toLogin : () =>(['push','/login']),
    toPost : () =>(['push','/post']),
    toUser : () =>(['push','/user']),
    toAdd : () =>(['push','/addPost']),
    DeletePostData : (postId) =>(['post/deletePostData', postId]),
    EditPostData : (postId) =>(['post/editPostData', postId])
}

export default Connect(states,actions)(DetailPost)