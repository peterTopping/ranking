import { combineReducers } from 'redux';
import { actionSpecs } from '../actions';

const reducers = {};

const defaultState = {
    isFetching: false,
    error: false,
    data: {},
}

actionSpecs.forEach(s => {
    const name = `${s.name}Reducer`;
    reducers[name] = (state = defaultState, action) => {
        switch(action.type) {
        case s.type: {
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        }
        case `${s.type}_SUCCESS`: {
            return {
                ...state,
                isFetching: false,
                data: action.data,
            };
        }
        case `${s.type}_FAILURE`: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        }
        default: return state;
        }
    }
})

const rootReducer = combineReducers(reducers);

export default rootReducer;
