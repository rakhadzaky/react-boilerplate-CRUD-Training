const initialState = {
	postData: {
		postId: '',
		title: '',
		body: '',
		isEdit: false,
	},
	post: {
		data: [],
		isFetching: false,
	},
	detailedPost: {
		postId: '',
		title: '',
		body: '',
		comments: [],
		isFetching: false,
	},
}

const events = {
	addPostData :(state, action) => (state.updateIn(['postData', action.attr], val => action.payload)),
	changePostData :(state, action) => (state.updateIn(['post', action.attr], val => action.payload)),
	changeDetailPostData: (state, action) => (state.updateIn(['detailedPost', action.attr], val=> action.payload)),
}

export default {
	initialState,events
}

