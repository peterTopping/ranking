import React, { Component } from 'react';

import defaultPage from '../hocs/defaultPage';
import AddUser from '../components/AddUser';

class Users extends Component {
    render() {
        const { users, addUser } = this.props;
        return (
            <AddUser
                users={users}
                addUser={addUser}
            />
        );
    }
}

export default defaultPage(Users);
