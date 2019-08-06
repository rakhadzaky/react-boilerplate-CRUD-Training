import React from 'react'
import { GetAttrs } from '../../global/utility';
import Connect from '../connect';
import Header from '../component/header'

const Add = (props) => {
    const[postId, title, body, isEdit] = GetAttrs(props.postData,['postId','title','body','isEdit'])

    return(
        <div>
            <Header homeLink={props.toHome} loginLink={props.toLogin} />
            <div className="ui hidden divider"></div>
            <h3 className="ui headier dividing container">Post your story</h3>
            <div className="ui form container">
                <div className="field">
                    <input type="text" placeholder="Title" value={title} onChange={props.AddPostData('title')} />
                </div>
                <div className="field">
                    <textarea onChange={props.AddPostData('body')} placeholder="Body" value={body} />
                </div>
                {
                    isEdit ?
                    <button className="ui right labeled icon orange right floated button" onClick={() => props.UpdatePostData()}>
                        <i className="right edit outline icon"></i>
                        Edit
                    </button>
                    :
                    <button className="ui right labeled icon green right floated button" onClick={() => props.SubmitPostData()}>
                        <i className="right check icon"></i>
                        Submit
                    </button>
                }
            </div>
        </div>
    )
}

const state={
    postData : '/home/addPost'
}

const actions={
    AddPostData : (attr) => (e) => (['home/addPostData', attr, e.target.value]),
    SubmitPostData: ()=>(['home/submitPostData']),
    UpdatePostData: ()=>(['home/updatePostData']),
    toLogin : () =>(['push','/login']),
    toHome : () =>(['push','/post'])
}

export default Connect(state, actions)(Add)