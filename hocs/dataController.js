import React, { Component } from 'react';
import dummyState from './dummyState';

export default (Page) => class dataController extends Component {
    constructor(props) {
        super(props);
        this.state = dummyState;
    }

    render() {
        return <Page {...this.state} />;
    }
}
