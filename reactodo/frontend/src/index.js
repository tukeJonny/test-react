import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider    } from 'react-redux'
import './index.css';
import App from './containers/App/App';

import todoApp from './reducers'

let store = createStore(todoApp);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
