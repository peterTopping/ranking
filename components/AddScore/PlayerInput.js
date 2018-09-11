import React, { Component } from 'react';
import { AutoComplete } from 'antd';

class PlayerInput extends Component {
    constructor(props) {
        super(props);
        this.state = { players: this.props.players };
    }

    render() {
        const { placeholder } = this.props;
        const { players } = this.state;
        const dataSource = players.map(u => u.name);

        return (
            <AutoComplete
                placeholder={placeholder}
                dataSource={dataSource}
            />
        )
    }
}

export default PlayerInput;
