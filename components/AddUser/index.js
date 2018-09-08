import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

class AddUser extends Component {
    render() {
        return (
            <Form
                layout="vertical"
                onSubmit={this.props.addUser}
                style={{ marginTop: '15px' }}
            >
                <Form.Item>
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">
                        Add user
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default AddUser;
