import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunkMiddleware);

export const initStore = (initialState = {}) => {
    return createStore(rootReducer, initialState, middleware)
}
