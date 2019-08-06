import {Get, Post, Delete, Put} from "../global/network"

function EmptyPostState(){
    return(dispatch)=>{
        dispatch(['/home/addPostData',{
            attr: 'postId',
            payload: ''
        }])
        dispatch(['/home/addPostData',{
            attr: 'title',
            payload: ''
        }])
        dispatch(['/home/addPostData',{
            attr: 'body',
            payload: ''
        }])
    }
}

function GetDetailPost(postId){
    return(dispatch)=>{
        console.log('GetDetailPost'+postId)
        dispatch(['/home/changeDetailPostData',{
            attr: 'isFetching',
            payload: true
        }])
        Get(dispatch, '/posts/'+postId,{})
        .then(res => {
            dispatch(['/home/changeDetailPostData',{
                attr: 'postId',
                payload: res.id
            }])
            dispatch(['/home/changeDetailPostData',{
                attr: 'title',
                payload: res.title
            }])
            dispatch(['/home/changeDetailPostData',{
                attr: 'body',
                payload: res.body
            }])
        })
        .catch(err => console.log(err))

        Get(dispatch, '/comments',{'postId' : postId})
        .then(res => {
            dispatch(['/home/changeDetailPostData',{
                attr: 'comments',
                payload: res
            }])
            dispatch(['/home/changeDetailPostData',{
                attr: 'isFetching',
                payload: false
            }])
        })
        .catch(err => console.log(err))

        dispatch(['push','/detailPost'])
    }
}

function GetPostData(){
    console.log("GetDataUser")
    return( dispatch, getState)=>{
        dispatch(['/home/changePostData',{
            attr: 'isFetching',
            payload: true
        }])
        Get(dispatch, '/posts',{})
        .then(res => {
            dispatch(['/home/changePostData',{
                attr: 'data',
                payload: res
            }])
            dispatch(['/home/changePostData',{
                attr: 'isFetching',
                payload: false
            }])
        })
        .catch(err => console.log(err))
    }
}

function AddPostData(attr, value){
    return(dispatch)=>{
        dispatch(['/home/addPostData', {
            attr: attr,
            payload: value
        }])

    }
}

function SubmitPostData(){
    return(dispatch, getState)=>{
        const state = getState()
        const title = state.home.getIn(['addPost','title']).trim()
        const body = state.home.getIn(['addPost','body']).trim()
        Post(dispatch, '/posts', {
            'userId': 1,
            'title': title,
            'body': body
        })
        .then(res => {
            console.log("true => ")
            console.log(res)
            dispatch(['/home/addPostData',{
                attr: 'postId',
                payload: ''
            }])
            dispatch(['/home/addPostData',{
                attr: 'title',
                payload: ''
            }])
            dispatch(['/home/addPostData',{
                attr: 'body',
                payload: ''
            }])
        })
        .catch(err => {
            console.log("false => ")
            console.log(err)
        })
    }
}

function DeletePostData(postId){
    console.log("Delete Post "+postId)
    return(dispatch)=>{
        Delete(dispatch,'/post/'+postId)
        .then(res => {
            console.log("true")
            console.log(res)
        })
        .catch(err =>{
            console.log("false")
            console.log(err)
        })
    }
}

function EditPostData(postId){
    return(dispatch)=>{
        Get(dispatch, '/posts/'+postId,{})
        .then(res => {
            dispatch(['/home/addPostData',{
                attr: 'postId',
                payload: res.id
            }])
            dispatch(['/home/addPostData',{
                attr: 'title',
                payload: res.title
            }])
            dispatch(['/home/addPostData',{
                attr: 'body',
                payload: res.body
            }])
            dispatch(['/home/addPostData',{
                attr: 'isEdit',
                payload: true
            }])
        })
        .catch(err => console.log(err))

        dispatch(['push','/addPost'])
    }
}

function UpdatePostData(){
    return(dispatch, getState)=>{
        const state = getState()
        const title = state.home.getIn(['addPost','title']).trim()
        const body = state.home.getIn(['addPost','body']).trim()
        const postId = state.home.getIn(['addPost','postId'])
        Put(dispatch, '/posts/'+postId, {
            'userId': 1,
            'title': title,
            'body': body
        })
        .then(res => {
            console.log("true => ")
            console.log(res)
            dispatch(['/home/addPostData',{
                attr: 'isEdit',
                payload: false
            }])
            dispatch(['/home/addPostData',{
                attr: 'postId',
                payload: ''
            }])
            dispatch(['/home/addPostData',{
                attr: 'title',
                payload: ''
            }])
            dispatch(['/home/addPostData',{
                attr: 'body',
                payload: ''
            }])
            }
        )
        .catch(err => {
            console.log("false => ")
            console.log(err)
            }
        )
    }
}

export default{
    getPostData: GetPostData,
    addPostData: AddPostData,
    getDetailPost: GetDetailPost,
    submitPostData: SubmitPostData,
    deletePostData: DeletePostData,
    editPostData: EditPostData,
    updatePostData: UpdatePostData
}