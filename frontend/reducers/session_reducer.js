import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state = { currentUser: null }, action) => {
	Object.freeze(state);
	const currentUser = action.currentUser;

	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			return merge({}, state, { session: currentUser });
		default:
			return state;
	}
};

export default sessionReducer;
