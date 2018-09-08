import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1 className="header left-slant">ping</h1>
                <h1 className="header">pong</h1>
            </div>
        );
    }
}

export default Header;
