import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state = { currentUser: null }, sessionAction) => {
	Object.freeze(state);
	const currentUser = sessionAction.currentUser;

	switch (sessionAction.type) {
		case RECEIVE_CURRENT_USER:
			return merge({}, state, { session: currentUser });
		default:
			return state;
	}
};

export default sessionReducer;
