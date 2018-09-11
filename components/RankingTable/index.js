import React, { Component } from 'react';
import { Table } from 'antd';
import { sortBy } from 'lodash';

const columns = [
    {
        title: 'Ranking',
        key: 'ranking',
        dataIndex: 'ranking',
    },
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
    },
    {
        title: 'Games played',
        key: 'games',
        dataIndex: 'games',
    },
];

class RankingTable extends Component {
    render() {
        const { players } = this.props;
        const dataSource = sortBy(players, u => -u.ranking)
            .map((u, i) => ({ ...u, key: i }));

        return (
            <Table
                columns={columns}
                dataSource={dataSource}
                style={{ backgroundColor: 'white' }}
            />
        );
    }
}

export default RankingTable;
