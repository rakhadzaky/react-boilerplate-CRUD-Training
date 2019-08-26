import React from 'react'
import {Router, Switch, Route} from 'react-router'
import Login from './login'
import Home from './home'
import DetailPost from './detailPost'
import AddPost from './addPost'
import User from './user'
import PostUser from './postSpesific/postUser'

function requireAuth(nextState, replace, callback) {
    let notAuth = true
    try {
        notAuth = (localStorage.getItem('xaccess') === null )
    } catch (e) {
    } finally {
        if (notAuth) {
            replace({
                pathname: '/',
                state: { nextPathname: nextState.location.pathname }
            });
        }
        callback()
    }
}

function Root({history}) {
	return(
		<Router history={history}>
		 	<Switch>
                <Route path="/post" component={Home} />
                <Route path="/detailPost" component={DetailPost} />
                <Route path="/addPost" component={AddPost} />
                <Route path="/user" component={User} />
                <Route path="/postUser" component={PostUser} />
                <Route path="/" component={Login} />
            </Switch>
       	</Router>
		)
}


export default Root