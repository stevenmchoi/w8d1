import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
	const store = configureStore();

	// Testing start
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	// Testing end

	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);
});
