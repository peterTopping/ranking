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
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation({ key }) {
        const page = pages[key];
        if (page && page.url) Router.push(page.url);
    }

    render() {
      console.log(this.props)
        const { url } = this.props;
        const selected = findIndex(pages, p => p.url === url);

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
                        {...this.props}
                    />
                </Layout.Content>
            </Layout>
        );
    }
}
