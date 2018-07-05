import React from 'react';
import ReactDOM from 'react-dom';
// for redux, and middleware for thunx
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// for debug
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import reducer from './reducers';

import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';

import registerServiceWorker from './registerServiceWorker';

// App内で使用するstoreの宣言, applyMiddleware(thunk)を第二引数に渡す
//const store = createStore(reducer, applyMiddleware(thunk));

// debug tools 用に変更, developmentであればenhancerを拡張する
const enhancer = process.env.NODE_ENV === 'development' ?
  // compose..でwrapする
  composeWithDevTools(applyMiddleware(thunk)): applyMiddleware(thunk);
const store = createStore(reducer, enhancer);


// Providerを使用する（Wrapする）、storeを渡す
// EventShow へのpathのIDは動的に変化するので、:idとコロンを付ける
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/events/new" component={EventsNew} />
        <Route path="/events/:id" component={EventsShow} />
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
