import React from 'react';

export default function Joke(props) {
    return (
        <div id="joke">
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
        </div>
    );
}