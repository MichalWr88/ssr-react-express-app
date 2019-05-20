import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, { ...window.APP_STATE }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.hydrate(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.hydrate(
// 	<App {...window.APP_STATE} />,
// 	document.getElementById('app')
// );