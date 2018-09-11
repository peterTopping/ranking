import { actionTypes } from '../actions';

const {
    GET_PLAYERS,
    GET_PLAYERS_SUCCESS,
    GET_PLAYERS_FAILURE,
    POST_PLAYER_SUCCESS,
    POST_SCORE_SUCCESS,
} = actionTypes;

const defaultState = {
    isFetching: false,
    error: false,
    data: [],
};

export default function players(state = defaultState, action) {
      switch(action.type) {
      case GET_PLAYERS: {
          return {
              ...state,
              isFetching: true,
              error: false,
          };
      }
      case GET_PLAYERS_SUCCESS: {
          return {
              ...state,
              isFetching: false,
              data: action.data,
          };
      }
      case GET_PLAYERS_FAILURE: {
          return {
              ...state,
              isFetching: false,
              error: action.error,
          }
      }
      case POST_PLAYER_SUCCESS: {
          return {
              ...state,
              data: [...state.data, action.data],
          };
      }
      case POST_SCORE_SUCCESS: {
          // TODO replace the dets of the affected players after a score has been successfully submitted
          return {
              ...state,
              data: state.data,
          };
      }
      default: return state;
    }
}
