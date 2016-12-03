import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/App';

axios.get('/api/contests')
    .then(resp => {
        ReactDOM.render(
            <App initialContests={window.initialData.contests} />,
            document.getElementById('root')
        );
    })
    .catch(console.error);

