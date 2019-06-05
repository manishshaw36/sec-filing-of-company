import { createStore, combineReducers, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';

import firstScreenReducer from './reducers/firstScreenReducer';
import secondScreenReducer from './reducers/secondScreenReducer';

export default createStore(
    combineReducers({
        firstScreenReducer,
        secondScreenReducer,
    }),
    {},
    applyMiddleware(thunk)
);