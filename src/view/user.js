import React from 'react'
import Connect from './connect'
import { GetAttrs } from '../global/utility'
import Header from './component/header'
import ListUser from './user/index'
import {Button} from './component/button'

const User = (props) =>{
    const [UserData, UserFetching] = GetAttrs(props.user,['data','isFetching'])

    return(
        <div>
            <Header loginLink={props.toLogin} postLink={props.toPost} userLink={props.toUser}/>
            <div className="ui hidden divider"></div>
            <div className="ui grid container">
                <div className="two wide column">
                    <Button type={'ui secondary button'} text={'Get Data'} isLoading={UserFetching} onClick={props.GetUsersData}/>
                </div>
            </div>
            <div className="ui hidden divider"></div>
            <ListUser isLoading={UserFetching}/>
        </div>
    )
}


const states={
    user : '/user/user',
}
const actions={
    GetUsersData :() => (['user/GetUsersData']),
    toLogin : () =>(['push','/login']),
    toPost : () =>(['push','/post']),
    toUser : () =>(['push','/user']),
}

export default Connect (states, actions)(User)