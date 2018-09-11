import { combineReducers } from 'redux';
import players from './players';
import postPlayer from './postPlayer';
import postScore from './postScore';

const reducers = {
    players,
    postPlayer,
    postScore,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
