import React, { Component } from 'react';
import axios from 'axios';

import dummyState from './dummyState';

export default (Page) => class dataController extends Component {
    constructor(props) {
        super(props);
        this.state = dummyState;
        this.addUser = this.addUser.bind(this);
        this.addResult = this.addResult.bind(this);
    }

    addUser(e) {
        e.preventDefault();
        axios.post('/users', {});
    }

    addResult(e) {
        e.preventDefault();
        axios.post('/results', {});
    }

    render() {
        return (
            <Page
                {...this.state}
                addUser={this.addUser}
                addResult={this.addResult}
            />
        );
    }
}
