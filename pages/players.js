import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addPlayer } from '../actions';
import defaultPage from '../hocs/defaultPage';
import AddPlayer from '../components/AddPlayer';

class Players extends Component {
    render() {
        const { players, addPlayer } = this.props;
        return (
            <AddPlayer
                players={players}
                addPlayer={addPlayer}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPlayer: bindActionCreators(addPlayer, dispatch),
});

export default connect(
    (s) => s,
    mapDispatchToProps,
)(defaultPage(Players));
