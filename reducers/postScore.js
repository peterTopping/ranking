import { actionTypes } from '../actions';

const {
    POST_SCORE,
    POST_SCORE_SUCCESS,
    POST_SCORE_FAILURE,
} = actionTypes;

const defaultState = {
    isFetching: false,
    error: false,
};

export default function postScore(state = defaultState, action) {
      switch(action.type) {
      case POST_SCORE: {
          return {
              isFetching: true,
              error: false,
          };
      }
      case POST_SCORE_SUCCESS: {
          return {
              error: false,
              isFetching: false,
          };
      }
      case POST_SCORE_FAILURE: {
          return {
              isFetching: false,
              error: action.error,
          }
      }
      default: return state;
    }
}
