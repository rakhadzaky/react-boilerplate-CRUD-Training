import React from 'react'

const Header = (props) =>{
    return(
        <div className="ui attached stackable menu">
            <div className="ui container">
                <a className="item" onClick={props.postLink}>
                    <i className="home icon"></i> Home
                </a>
                <a className="item" onClick={props.userLink}>
                    <i className="users icon"></i> Users
                </a>
                <div className="right item">
                    <button className="ui secondary button" onClick={props.loginLink}>
                        <i className="user icon"></i> Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header