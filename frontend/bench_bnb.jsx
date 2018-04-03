import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
// import { login, logout, signup } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
	const store = configureStore();

	// Testing start
	window.getState = store.getState;
	window.dispatch = store.dispatch;

	window.login = login;
	window.logout = logout;
	window.signup = signup;
	// Testing end

	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);
});
