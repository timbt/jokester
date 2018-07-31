import React from 'react';

export default function JokeButton(props) {
    const buttonMessage = props.welcome ? 
        'Tell me a joke!' : 
        'Tell me another joke!';
    return <button onClick={props.onClick}>{buttonMessage}</button>
}