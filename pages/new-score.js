import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addResult } from '../actions';
import defaultPage from '../hocs/defaultPage';
import AddResult from '../components/AddResult';

class NewScore extends Component {
    render() {
        const { users, addResult } = this.props;
        return (
            <AddResult
                users={users}
                addResult={addResult}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addResult: bindActionCreators(addResult, dispatch),
});

export default connect(
    (s) => s,
    mapDispatchToProps,
)(defaultPage(NewScore));
