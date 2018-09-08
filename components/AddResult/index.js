import React, { Component } from 'react';
import { Form, AutoComplete, Input, Button, Select, InputNumber } from 'antd';

import UserInput from './UserInput';

class AddResult extends Component {
    render() {
        const { users, addResult } = this.props;

        return (
            <Form
                layout="vertical"
                onSubmit={addResult}
                style={{ marginTop: '15px' }}
            >
                <Form.Item>
                    <UserInput
                        placeholder="Someone"
                        users={users}
                    />
                </Form.Item>
                <Form.Item>
                    <AutoComplete
                        placeholder="Beat/Lost to"
                        dataSource={['Beat', 'Lost to']}
                    />
                </Form.Item>
                {/*<Form.item>
                    <Select placeholder="Beat/Lost to">
                        <Select.Option value={true}>
                            Beat
                        </Select.Option>
                        <Select.Option value={false}>
                            Lost to
                        </Select.Option>
                    </Select>
                </Form.item>*/}
                <Form.Item>
                    <UserInput
                        placeholder="Someone else"
                        users={users}
                    />
                </Form.Item>
                <Form.Item label="Losers score">
                    <InputNumber />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">
                        Submit result
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default AddResult;
