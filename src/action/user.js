import {Get, Post, Delete, Put} from "../global/network"

function getUsersData(){
    console.log("getUsersData")
    return(dispatch) => {
        dispatch(['/user/changeUsersData',{
            attr: 'isFetching',
            payload: true
        }])
        Get(dispatch, '/users', {})
        .then(res => {
            console.log(res)
            dispatch(['/user/changeUsersData',{
                attr: 'data',
                payload: res
            }])
            dispatch(['/user/changeUsersData',{
                attr: 'isFetching',
                payload: false
            }])
        })
        .catch(err => {
            console.log(err)

        })
    }
}

function getDetailUserData(userId){
    return(dispatch)=>{
        dispatch(['/user/changeDetailUserData',{
            attr: 'isFetching',
            payload: true
        }])
        Get(dispatch, '/users/' +userId, {})
        .then(res => {
            dispatch(['/user/changeDetailUserData',{
                attr: 'userId',
                payload: res.id
            }])
            dispatch(['/user/changeDetailUserData',{
                attr: 'name',
                payload: res.name
            }])
            dispatch(['/user/changeDetailUserData',{
                attr: 'email',
                payload: res.email
            }])
            dispatch(['/user/changeDetailUserData',{
                attr: 'address',
                payload: res.address
            }])
            dispatch(['/user/changeDetailUserData',{
                attr: 'isFetching',
                payload: false
            }])
            dispatch(['push','/postUser'])
        })
        .catch(err => console.log(err))
    }
}

export default{
    GetUsersData: getUsersData,
    GetDetailUserData: getDetailUserData,
}