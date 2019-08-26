import React from 'react'
import Connect from '../connect'
import { GetAttrs } from '../../global/utility'
import Header from '../component/header'
import ListPost from './index'
import {Button} from '../component/button'

const User = (props) =>{
    const [UserData, UserFetching] = GetAttrs(props.user,['data','isFetching'])

    return(
        <div>
            <Header loginLink={props.toLogin} postLink={props.toPost} userLink={props.toUser}/>
            <div className="ui hidden divider"></div>
            <div className="ui grid container">
            </div>
            <div className="ui hidden divider"></div>
            <ListPost isLoading={UserFetching}/>
        </div>
    )
}


const states={
    user : '/user/user',
}
const actions={
    GetUsersData :() => (['user/GetUsersData']),
    // ChangeName : (e) => (['post/changeUserName', e.target.value]),
    toLogin : () =>(['push','/login']),
    toPost : () =>(['push','/post']),
    toUser : () =>(['push','/user']),
}

export default Connect (states, actions)(User)