const initialState = {
    username: '',
    id: 0,
    propic: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case GET_USER_DATA + '_FULFILLED':
        //     return Object.assign({}, state, { user: action.payload })

        default:
            return state;
    }
}