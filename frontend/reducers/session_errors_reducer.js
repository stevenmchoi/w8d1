import {
	RECEIVE_CURRENT_USER,
	RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

const sessionErrReducer = (state = [], errAction) => {
	Object.freeze(state);

	switch (errAction.type) {
		case RECEIVE_CURRENT_USER:
			return [];
		case RECEIVE_SESSION_ERRORS:
			return errAction.errors;
		default:
			return state;
	}
};

export default sessionErrReducer;
