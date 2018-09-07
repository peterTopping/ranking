import React, { Component } from 'react';
import { Layout } from 'antd';

import 'antd/dist/antd.min.css';
import '../static/styles/index.css';

import dataController from '../hocs/dataController';
import Header from '../components/Header';
import RankingTable from '../components/RankingTable';

class Dashboard extends Component {
    render() {
        const { users } = this.props;
        return (
            <Layout>
                <Layout.Header>
                    <Header />
                </Layout.Header>
                <Layout.Content>
                    <RankingTable users={users} />
                </Layout.Content>
            </Layout>
        );
    }
}

export default dataController(Dashboard);
