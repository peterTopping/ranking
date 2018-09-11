import React, { Component } from 'react';
import { Table } from 'antd';
import { sortBy } from 'lodash';

const columns = [
    {
        title: 'Rank',
        key:  'rank',
        dataIndex: 'rank',
    },
    {
        title: 'Score',
        key: 'score',
        dataIndex: 'score',
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
        const dataSource = sortBy(players, u => -u.score)
            .map((u, i) => ({ ...u, rank: i, key: i }));

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
