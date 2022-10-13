import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './redux/store';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/saga/sagas';
import { feedbackReducer } from './redux/feedbackReducer';

const saga = createSagaMiddleware()

export const store = createStore(feedbackReducer, compose(applyMiddleware(saga)))

saga.run(sagaWatcher)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);