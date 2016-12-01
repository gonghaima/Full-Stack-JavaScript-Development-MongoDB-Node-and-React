import React from 'react';
import ReactDOM from 'react-dom';


const Header = ({message}) => {
    return (
        <h2 className="Header text-center">
            {message}
        </h2>
    );
};

Header.propTypes = {
    message: React.PropTypes.string
};
const App = () => {
    return (
  
        <div className="App">
            <Header message="naming contests"/>
            <div>
                
            </div>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);