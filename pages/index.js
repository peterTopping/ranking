import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPlayers } from '../actions';

import defaultPage from '../hocs/defaultPage';
import RankingTable from '../components/RankingTable';

class Dashboard extends Component {
    componentWillMount() {
        const { players } = this.props;
        if (!players.data.length) this.props.getPlayers();
    }

    render() {
        const { players } = this.props;
        return <RankingTable players={players.data} />;
    }
}

export default connect(
    ({ players }) => ({ players }),
    dispatch => bindActionCreators({ getPlayers }, dispatch),
)(defaultPage(Dashboard));
