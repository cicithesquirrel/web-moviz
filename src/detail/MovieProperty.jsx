import React from 'react';
import './MovieProperty.css';

const MovieProperty = ({label, value}) => (
    <li className="MovieProperty">
        <span className="property">{label}&nbsp;</span>
        <span className="value">{value}</span>
    </li>
);

export default MovieProperty;