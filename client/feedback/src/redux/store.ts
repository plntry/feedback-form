import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { feedbackReducer } from './feedbackReducer';

const saga = createSagaMiddleware()

export const store = createStore(feedbackReducer, compose(applyMiddleware(saga)))