import React, { Component } from 'react';

import JokeContainer from './JokeContainer';
import Header from './Header';

class App extends Component {
    render () {
        return (
            <div id="app">
                <Header title="Jokester" />
                <JokeContainer />
            </div>
        );
    }
}

export default App;