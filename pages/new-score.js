import React, { Component } from 'react';

import defaultPage from '../hocs/defaultPage';
import AddResult from '../components/AddResult';

class NewScore extends Component {
    render() {
        const { addResult, users } = this.props;
        return (
            <AddResult
                users={users}
                addResult={addResult}
            />
        );
    }
}

export default defaultPage(NewScore);
