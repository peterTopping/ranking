import axios from 'axios';

const actionSpecs = [
    { method: 'get', endpoint: 'users', name: 'getUsers', type: 'GET_USERS' },
    { method: 'post', endpoint: 'users', name: 'addUser', type: 'POST_USER' },
    { method: 'post', endpoint: 'results', name: 'addResult', type: 'POST_RESULT' },
];

const actions = {};
actionSpecs.forEach(s => {
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

const getUsers = actions.getUsers;
const addUser = actions.addUser;
const addResult = actions.addResult;

export {
    actionSpecs,
    getUsers,
    addUser,
    addResult,
};
