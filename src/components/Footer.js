import React from 'react';

export default function Footer () {
    const mySite = <a href="timbt.github.io">Tim Beattie</a>;
    const jokeApiRepo = <a href="https://github.com/15Dkatz/official_joke_api">Official Joke API</a>;
    const jokeApiDev = <a href="https://github.com/15Dkatz">15Dkatz</a>;
    return (
        <footer>
            This project was created by {mySite}. Jokester is powered by the {jokeApiRepo} by {jokeApiDev}.
        </footer>
    );
}