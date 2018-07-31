import React, { Component } from 'react';
import Welcome from './Welcome';
import Joke from './Joke';
import JokeButton from './JokeButton';

// Thanks to 15Dkatz for the great API
const JOKE_API = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';

class JokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: true // Load page in "welcome" state
    };
    // bind getJoke() so that it can be passed to child components
    this.getJoke = this.getJoke.bind(this);
  }

  getJoke() {
    // Call the joke API with fetch and convert the response to a JSON object
    fetch(JOKE_API).then(response => response.json()).then(
      // Update the state once the API response is received and processed
      response => this.setState(() => (
        {
          welcome: false, // Always false once getJoke() has been called
          joke: {
            setup: response.setup,
            punchline: response.punchline
          }
        }
      ))
    );
  }

  render() {
    const content = this.state.hasOwnProperty('joke') ? 
      <Joke 
        setup={this.state.joke.setup} 
        punchline={this.state.joke.punchline}
      /> : 
      <Welcome />;

    return (
      <div className="JokeContainer">
        {content}
        <JokeButton welcome={this.state.welcome} onClick={this.getJoke}/>
      </div>
    );
  }
}

export default JokeContainer;
