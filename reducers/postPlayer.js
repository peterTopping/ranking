import { actionTypes } from '../actions';

const {
    POST_PLAYER,
    POST_PLAYER_SUCCESS,
    POST_PLAYER_FAILURE,
} = actionTypes;

const defaultState = {
    isFetching: false,
    error: false,
};

export default function postPlayer(state = defaultState, action) {
      switch(action.type) {
      case POST_PLAYER: {
          return {
              isFetching: true,
              error: false,
          };
      }
      case POST_PLAYER_SUCCESS: {
          return {
              error: false,
              isFetching: false,
          };
      }
      case POST_PLAYER_FAILURE: {
          return {
              isFetching: false,
              error: action.error,
          }
      }
      default: return state;
    }
}
