import React from 'react'
import { GetAttrs } from '../../global/utility';
import Connect from '../connect';
import Header from '../component/header'
import { Button as ButtonUI, Header as HeaderUI, Icon, Modal } from 'semantic-ui-react'

const Add = (props) => {
    const[postId, title, body, isEdit] = GetAttrs(props.postData,['postId','title','body','isEdit'])

    return(
        <div>
            <Header loginLink={props.toLogin} postLink={props.toPost} userLink={props.toUser}/>
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
            {/* <Modal
                trigger={isEdit}
                basic size='small'
            >
                <HeaderUI icon='paper plane' content='Successfully Submit!' />
                <Modal.Content>
                <p>
                    Congratulation! you just successfully submit your new story! Click anywhere to continue
                </p>
                </Modal.Content>
            </Modal> */}
        </div>
    )
}

const state={
    postData : '/post/addPost'
}

const actions={
    AddPostData : (attr) => (e) => (['post/addPostData', attr, e.target.value]),
    SubmitPostData: ()=>(['post/submitPostData']),
    UpdatePostData: ()=>(['post/updatePostData']),
    toLogin : () =>(['push','/login']),
    toPost : () =>(['push','/post']),
    toUser : () =>(['push','/user']),
    toAdd : () =>(['push','/addPost'])
}

export default Connect(state, actions)(Add)