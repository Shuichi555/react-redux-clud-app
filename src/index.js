import React from 'react';
import ReactDOM from 'react-dom';
// for redux, and middleware for thunx
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import reducer from './reducers';

import EventsIndex from './components/events_index';
import registerServiceWorker from './registerServiceWorker';

// App内で使用するstoreの宣言, applyMiddleware(thunk)を第二引数に渡す
const store = createStore(reducer, applyMiddleware(thunk));

// Providerを使用する（Wrapする）、storeを渡す
ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
