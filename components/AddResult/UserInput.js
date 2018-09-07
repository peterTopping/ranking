import React, { Component } from 'react';
import { AutoComplete } from 'antd';

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = { users: this.props.users };
    }

    render() {
        const { placeholder } = this.props;
        const { users } = this.state;
        const dataSource = users.map(u => u.name);

        return (
            <AutoComplete
                placeholder={placeholder}
                dataSource={dataSource}
            />
        )
    }
}

export default UserInput;
