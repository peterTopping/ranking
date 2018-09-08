import React, { Component } from 'react';
import Router from 'next/router';
import { Layout, Menu } from 'antd';
import { findIndex } from 'lodash';
import axios from 'axios';

import 'antd/dist/antd.min.css';
import '../static/styles/index.css';

import dummyState from './dummyState';
import Header from '../components/Header';

const pages = [
    { url: '/', label: 'Dashboard' },
    { url: null, label: 'Progress' },
    { url: null, label: 'Game history' },
    { url: '/new-score', label: 'Submit new score' },
    { url: '/users', label: 'Add new player' },
];

export default (Page) => class defaultPage extends Component {
    constructor(props) {
        super(props);
        this.state = dummyState;
        this.addUser = this.addUser.bind(this);
        this.addResult = this.addResult.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    addUser(e) {
        e.preventDefault();
        axios.post('/users', {});
    }

    addResult(e) {
        e.preventDefault();
        axios.post('/results', {});
    }

    handleNavigation({ key }) {
        const page = pages[key];
        if (page && page.url) Router.push(page.url);
    }

    render() {
        const { pathname } = this.props.url;
        const selected = findIndex(pages, p => p.url === pathname);

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Layout.Sider>
                    <Header />
                    <Menu
                        onClick={this.handleNavigation}
                        defaultSelectedKeys={[`${selected}`]}
                    >
                        {pages.map((p, i) => (
                            <Menu.Item key={i}>
                                {p.label}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Layout.Sider>
                <Layout.Content style={{ margin: '50px' }}>
                    <Page
                        {...this.state}
                        addUser={this.addUser}
                        addResult={this.addResult}
                    />
                </Layout.Content>
            </Layout>
        );
    }
}
