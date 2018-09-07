import React, { Component } from 'react';
import { Layout } from 'antd';

import 'antd/dist/antd.min.css';
import '../static/styles/index.css';

import dataController from '../hocs/dataController';
import Header from '../components/Header';
import RankingTable from '../components/RankingTable';
import AddResult from '../components/AddResult';
import AddUser from '../components/AddUser';

class Dashboard extends Component {
    render() {
        const { users, addUser, addResult } = this.props;

        return (
            <Layout>
                <Layout.Header>
                    <Header />
                </Layout.Header>
                <Layout.Content style={{ margin: '50px' }}>
                    <RankingTable users={users} />
                    <AddResult
                        users={users}
                        addResult={addResult}
                    />
                  <AddUser addUser={addUser} />
                </Layout.Content>
            </Layout>
        );
    }
}

export default dataController(Dashboard);
