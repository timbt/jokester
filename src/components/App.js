import React, { Component } from 'react';
import JokeContainer from './JokeContainer';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css';

class App extends Component {
    render () {
        return (
            <div id="app" className="app">
                <Header title="Jokester" />
                <JokeContainer />
                <Footer />
            </div>
        );
    }
}

export default App;