import React, { Component } from 'react';
import Router from 'next/router';
import { Layout, Menu } from 'antd';
import { findIndex } from 'lodash';
import axios from 'axios';

import 'antd/dist/antd.min.css';
import '../static/styles/index.css';

import Header from '../components/Header';

const pages = [
    { url: '/', label: 'Dashboard' },
    { url: null, label: 'Progress' },
    { url: null, label: 'Game history' },
    { url: '/new-score', label: 'Submit new score' },
    { url: '/players', label: 'Add new player' },
];

export default (Page) => class defaultPage extends Component {
    static async getInitialProps(ctx) {
        let pageProps = {};
        if (Page.getInitialProps) {
          pageProps = await Page.getInitialProps(ctx);
        }

        return { ...pageProps };
    }

    constructor(props) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation({ key }) {
        const page = pages[key];
        if (page && page.url) Router.push(page.url);
    }

    render() {
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
                    <Page {...this.props} />
                </Layout.Content>
            </Layout>
        );
    }
}
