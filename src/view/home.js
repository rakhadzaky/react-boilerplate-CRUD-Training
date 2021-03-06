import React from 'react'
import Connect from './connect'
import { GetAttrs } from '../global/utility'
import Header from './component/header'
import ListPost from './post'
import {Button} from './component/button'

const Home = (props) =>{
    const [PostData, PostFetching] = GetAttrs(props.post,['data','isFetching'])

    return(
        <div>
            <Header loginLink={props.toLogin} postLink={props.toPost} userLink={props.toUser}/>
            <div className="ui hidden divider"></div>
            <div className="ui grid container">
                <div className="two wide column">
                    <Button type={'ui secondary button'} text={'Get Data'} isLoading={PostFetching} onClick={props.GetPostData}/>
                </div>
                <div className="two wide column">
                    <Button type={'ui green button'} text={'Add Post'} onClick={props.toAdd} />
                </div>
            </div>
            <div className="ui hidden divider"></div>
            <ListPost isLoading={PostFetching}/>
        </div>
    )
}


const states={
    user : '/post/user',
    post : '/post/post'
}
const actions={
    GetPostData :() => (['post/getPostData']),
    ChangeName : (e) => (['post/changeUserName', e.target.value]),
    toLogin : () =>(['push','/login']),
    toPost : () =>(['push','/post']),
    toUser : () =>(['push','/user']),
    toAdd : () =>(['push','/addPost'])
}

export default Connect (states, actions)(Home)