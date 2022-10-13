import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/saga/sagas';
import { feedbackReducer } from './redux/feedbackReducer';
import GlobalStyle from './global-styles/global.style';

const saga = createSagaMiddleware()

export const store = createStore(feedbackReducer, compose(applyMiddleware(saga)))

saga.run(sagaWatcher)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);