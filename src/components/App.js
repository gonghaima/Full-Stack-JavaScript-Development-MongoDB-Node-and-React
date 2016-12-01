import React from 'react';
import Header from './Header';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { test: 42 };
    // }

    state = {
        pageHeader:'Naming Contests'
    };

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    ...
                </div>
            </div>
        );
    };
}

export default App;