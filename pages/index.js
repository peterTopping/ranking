import React, { Component } from 'react';
import { connect } from 'react-redux';

import defaultPage from '../hocs/defaultPage';
import RankingTable from '../components/RankingTable';

class Dashboard extends Component {
    render() {
        const { users } = this.props;
        return <RankingTable users={users} />;
    }
}

export default connect(s => s)(defaultPage(Dashboard));
