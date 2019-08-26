const initialState = {
    users: {
        data: [],
        isFetching: false,
    },
    detailedUser:{
        userId:'',
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo:{
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPharse: '',
            bs: ''
        },
        isFetching: false,
    },
}

const events = {
	changeUsersData :(state, action) => (state.updateIn(['users', action.attr], val => action.payload)),
	changeDetailUserData: (state, action) => (state.updateIn(['detailedUser', action.attr], val=> action.payload)),
}

export default {
	initialState,events
}