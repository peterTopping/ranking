import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addUser } from '../actions';
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

const mapDispatchToProps = (dispatch) => ({
    addUser: bindActionCreators(addUser, dispatch),
});

export default connect(
    (s) => s,
    mapDispatchToProps,
)(defaultPage(Users));
