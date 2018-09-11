import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

class AddPlayer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addPlayer({});
    }

    render() {
        return (
            <Form
                layout="vertical"
                onSubmit={this.handleSubmit}
                style={{ marginTop: '15px' }}
            >
                <Form.Item>
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">
                        Add player
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default AddPlayer;
