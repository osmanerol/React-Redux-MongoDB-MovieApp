import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { applyMiddleware ,createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom'; 
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise-middleware';

const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxPromise, thunk, logger))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
