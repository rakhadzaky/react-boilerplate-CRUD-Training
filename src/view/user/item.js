import React from 'react'
import Connect from '../connect'
import { GetAttrs } from '../../global/utility';

const Item = (props) => {
    const[userData] = GetAttrs(props.user,['data'])

    return(
        <div className="ui cards grid container">
            {userData.map((value,index) =>{
                return(
                <div className="card" key={index}>
                    <div className="content">
                        <div className="header">
                            {value.name}
                        </div>
                        <div className="meta">
                            {value.email}
                        </div>
                        <div className="description">
                            {value.address.suite}, {value.address.street}, {value.address.city}
                        </div>
                    </div>
                    <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui inverted secondary button" onClick={() => props.GetDetailUserData(value.id)}>{value.name}'s Posts</div>
                    </div>
                    </div>
              </div>
                )
            })}
        </div>
    )
}
const states={
    user: '/user/users',
}
const actions={
    GetDetailUserData:(userId) => (['user/GetDetailUserData', userId]),
}

export default Connect(states,actions)(Item)