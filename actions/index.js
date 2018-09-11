import axios from 'axios';

const actionSpecs = [
    { method: 'get', endpoint: 'players', name: 'getPlayers', type: 'GET_PLAYERS' },
    { method: 'post', endpoint: 'players', name: 'addPlayer', type: 'POST_PLAYER' },
    { method: 'post', endpoint: 'scores', name: 'addScore', type: 'POST_SCORE' },
];

const actionTypes = {};
const actions = {};

actionSpecs.forEach(s => {
    actionTypes[s.type] = s.type;
    actionTypes[`${s.type}_SUCCESS`] = `${s.type}_SUCCESS`;
    actionTypes[`${s.type}_FAILURE`] = `${s.type}_FAILURE`;

    actions[s.name] = (payload) => {
        return (dispatch) => {
            dispatch({ type: s.type });

            const options = {
                method: s.method,
                url: `/api/${s.endpoint}`,
            };
            if (s.method !== 'get') options.data = s.payload;

            return axios(options)
                .then(({ data }) => dispatch({ type: `${s.type}_SUCCESS`, data }))
                .then(error => dispatch({ type: `${s.type}_FAILURE`, error }));
        }
    }
});

const getPlayers = actions.getPlayers;
const addPlayer = actions.addPlayer;
const addScore = actions.addScore;

export {
    actionTypes,
    getPlayers,
    addPlayer,
    addScore,
};
