import React from 'react';
import './MovieAltTitles.css';

const MovieAltTitles = ({titles}) => (
    <section>
        <ul className="MovieAltTitles">
            {Object.keys(titles).sort().map((key) => (
                <li>
                    <span className="MovieAltTitles-label"><img src={'/flags/' + key + '.png'} alt={key}/> </span>
                    <span className="MovieAltTitles-value">{titles[key]}</span>
                </li>
            ))}
        </ul>
    </section>
);

export default MovieAltTitles;