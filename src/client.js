import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/Home';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducers, { ...window.APP_STATE }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.hydrate((
	<BrowserRouter>
	  <Provider store={store}>
		<App />
	  </Provider>
	</BrowserRouter>
  ), document.getElementById('app'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.hydrate(
// 	<App {...window.APP_STATE} />,
// 	document.getElementById('app')
// );