import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addScore } from '../actions';
import defaultPage from '../hocs/defaultPage';
import AddScore from '../components/AddScore';

class NewScore extends Component {
    render() {
        const { players, addScore } = this.props;
        return (
            <AddScore
                players={players}
                addScore={addScore}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addScore: bindActionCreators(addScore, dispatch),
});

export default connect(
    (s) => s,
    mapDispatchToProps,
)(defaultPage(NewScore));
