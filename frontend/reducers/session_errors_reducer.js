import merge from 'lodash/merge';
import {
	RECEIVE_CURRENT_USER,
	RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

const sessionErrReducer = (state = { session: [] }, errAction) => {
	Object.freeze(state);
	const errors = errAction.errors;

	switch (errAction.type) {
		case RECEIVE_CURRENT_USER:
			return merge({}, state, { session: [] });
		case RECEIVE_SESSION_ERRORS:
			return merge({}, state, { session: errors });
		default:
			return state;
	}
};

export default sessionErrReducer;
