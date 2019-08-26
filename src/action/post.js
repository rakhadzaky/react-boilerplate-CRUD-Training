import {Get, Post, Delete, Put} from "../global/network"

function EmptyPostState(){
    return(dispatch)=>{
        dispatch(['/post/addPostData',{
            attr: 'postId',
            payload: ''
        }])
        dispatch(['/post/addPostData',{
            attr: 'title',
            payload: ''
        }])
        dispatch(['/post/addPostData',{
            attr: 'body',
            payload: ''
        }])
    }
}

function GetDetailPost(postId){
    return(dispatch)=>{
        console.log('GetDetailPost'+postId)
        dispatch(['/post/changeDetailPostData',{
            attr: 'isFetching',
            payload: true
        }])
        Get(dispatch, '/posts/'+postId,{})
        .then(res => {
            dispatch(['/post/changeDetailPostData',{
                attr: 'postId',
                payload: res.id
            }])
            dispatch(['/post/changeDetailPostData',{
                attr: 'title',
                payload: res.title
            }])
            dispatch(['/post/changeDetailPostData',{
                attr: 'body',
                payload: res.body
            }])
        })
        .catch(err => console.log(err))

        Get(dispatch, '/comments',{'postId' : postId})
        .then(res => {
            dispatch(['/post/changeDetailPostData',{
                attr: 'comments',
                payload: res
            }])
            dispatch(['/post/changeDetailPostData',{
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
        dispatch(['/post/changePostData',{
            attr: 'isFetching',
            payload: true
        }])
        Get(dispatch, '/posts',{})
        .then(res => {
            dispatch(['/post/changePostData',{
                attr: 'data',
                payload: res
            }])
            dispatch(['/post/changePostData',{
                attr: 'isFetching',
                payload: false
            }])
        })
        .catch(err => console.log(err))
    }
}

function AddPostData(attr, value){
    return(dispatch)=>{
        dispatch(['/post/addPostData', {
            attr: attr,
            payload: value
        }])

    }
}

function SubmitPostData(){
    return(dispatch, getState)=>{
        const state = getState()
        const title = state.post.getIn(['postData','title']).trim()
        const body = state.post.getIn(['postData','body']).trim()
        Post(dispatch, '/posts', {
            'userId': 1,
            'title': title,
            'body': body
        })
        .then(res => {
            console.log("true => ")
            console.log(res)
            dispatch(['/post/addPostData',{
                attr: 'postId',
                payload: ''
            }])
            dispatch(['/post/addPostData',{
                attr: 'title',
                payload: ''
            }])
            dispatch(['/post/addPostData',{
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
        Delete(dispatch,'/posts/'+postId)
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
            dispatch(['/post/addPostData',{
                attr: 'postId',
                payload: res.id
            }])
            dispatch(['/post/addPostData',{
                attr: 'title',
                payload: res.title
            }])
            dispatch(['/post/addPostData',{
                attr: 'body',
                payload: res.body
            }])
            dispatch(['/post/addPostData',{
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
        const title = state.post.getIn(['postData','title']).trim()
        const body = state.post.getIn(['postData','body']).trim()
        const postId = state.post.getIn(['postData','postId'])
        Put(dispatch, '/posts/'+postId, {
            'userId': 1,
            'title': title,
            'body': body
        })
        .then(res => {
            console.log("true => ")
            console.log(res)
            dispatch(['/post/addPostData',{
                attr: 'isEdit',
                payload: false
            }])
            dispatch(['/post/addPostData',{
                attr: 'postId',
                payload: ''
            }])
            dispatch(['/post/addPostData',{
                attr: 'title',
                payload: ''
            }])
            dispatch(['/post/addPostData',{
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