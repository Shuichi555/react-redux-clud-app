import React from 'react';
import ReactDOM from 'react-dom';
// for redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
