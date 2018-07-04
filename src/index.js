import React from 'react';
import ReactDOM from 'react-dom';
// for redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// App内で使用するstoreの宣言
const store = createStore(reducer);

// Providerを使用する（Wrapする）、storeを渡す
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
