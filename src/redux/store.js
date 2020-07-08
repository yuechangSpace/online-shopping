import { createStore , applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducer/root-reducer.js';


const middlewares = [logger]
const store = createStore(rootReducer,applyMiddleware(...middlewares));
export default store;