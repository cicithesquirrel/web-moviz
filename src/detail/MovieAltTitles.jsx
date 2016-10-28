import React from 'react';
import './MovieAltTitles.css';

const MovieAltTitles = ({titles}) => (
    <div>
        <h3>Other titles</h3>
        <ul className="MovieAltTitles">
            {Object.keys(titles).sort().map((key) => (
                <li>
                    <span className="MovieAltTitles-label"><img src={'/flags/' + key + '.png'} alt={key} title={key} /> </span>
                    <span className="MovieAltTitles-value">{titles[key]}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default MovieAltTitles;