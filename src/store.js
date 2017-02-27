import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import createLogger from 'redux-logger';

import comments from './data/comments';
import posts from './data/posts';


const defaultState = {
    posts,
    comments 
};
const logger = createLogger();
const middleware=[logger];
const store = createStore(rootReducer, defaultState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;