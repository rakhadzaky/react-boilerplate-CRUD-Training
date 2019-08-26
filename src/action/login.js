function Login(){
	return( dispatch, getState)=>{
		const state = getState()
		const username =state.login.getIn(['login','username']).trim()
		const password = state.login.getIn(['login','password']).trim()
		if(!username || !password){
            alert("form tidak boleh kosong")
            return
        }
        dispatch(['/login/changeForm', {
            attr : 'isFetching',
            payload : true
		}])

		dispatch(['push','/post'])
	}
}
function ChangeForm(attr, value) {
    return (dispatch) => {
        dispatch(['/login/changeForm', {
        	attr : attr,
        	payload : value
        }])
    }
}
export default{
	changeForm: ChangeForm,
	login : Login
}