import React from 'react';
import './MovieProperty.css';

const MovieProperty = ({label, value}) => (
    <li className="MovieProperty">
        <span className="MovieProperty-label">{label}&nbsp;</span>
        <span className="MovieProperty-value">{value}</span>
    </li>
);

export default MovieProperty;