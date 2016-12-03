import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview'


class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { test: 42 };
    // }

    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    };
}

export default App;