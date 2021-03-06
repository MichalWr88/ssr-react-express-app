

import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import { StaticRouter } from 'react-router';

import Html from './components/Html';
import App from './components/Home';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('*', async (req, res) => {
	const scripts = ['vendor.js', 'client.js'];

	const initialState = { initialText: "rendered on the server" };
	const contex = {};

	const store = createStore(reducers, initialState);

	const appMarkup = ReactDOMServer.renderToString(
		<StaticRouter location={req.url} context={context}>
			<Provider store={store}>
				<App />
			</Provider>
		</StaticRouter>
	);
	const html = ReactDOMServer.renderToStaticMarkup(
		<Html children={appMarkup}
			scripts={scripts}
			initialState={initialState}
		/>
	);

	res.send(`<!doctype html>${html}`);
});

app.listen(port, () => console.log('Listening on localhost:3000'));



// import express from 'express';
// import path from 'path';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';

// import Html from './components/Html';
// import App from './components/App';

// const app = express();

// app.use(express.static(path.join(__dirname)));

// app.get('/', async (req, res, next) => {
// 	const scripts = ['vendor.js', 'client.js'];
// 	const initialState = { initialText: "rendered on the server" };

// 	const appMarkup = ReactDOMServer.renderToString(<App {...initialState} />);

// 	const html = ReactDOMServer.renderToStaticMarkup(
// 		<Html children={appMarkup} scripts={scripts} initialState={initialState} />
// 	);

// 	res.send(`<!doctype html>${html}`);
// });


// app.listen(3000, () => console.log('Listening on localhost:3000'));