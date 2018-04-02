import React from 'react';
import { Provider } from 'react-redux';

const Root = ({ store }) => <Provider store={store}>/* Router */</Provider>;

export default Root;