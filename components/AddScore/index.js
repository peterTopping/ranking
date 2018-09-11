import React, { Component } from 'react';
import { Form, AutoComplete, Input, Button, Select, InputNumber } from 'antd';

import PlayerInput from './PlayerInput';

class AddScore extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addScore({});
    }

    render() {
        const { players, addScore } = this.props;

        return (
            <Form
                layout="vertical"
                onSubmit={this.handleSubmit}
                style={{ marginTop: '15px' }}
            >
                <Form.Item>
                    <PlayerInput
                        placeholder="Someone"
                        players={players}
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
                    <PlayerInput
                        placeholder="Someone else"
                        players={players}
                    />
                </Form.Item>
                <Form.Item label="Losers score">
                    <InputNumber />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">
                        Submit score
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default AddScore;
