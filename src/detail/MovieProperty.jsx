import React from 'react';
import './MovieProperty.css';

const MovieProperty = ({label, value, linkValue}) => (
    <li className="MovieProperty">
        <span className="MovieProperty-label">{label}&nbsp;</span>
        <span className="MovieProperty-value">
            {linkValue && <a href={'/?f=' + linkValue}>{value}</a>}
            {!linkValue && value}
        </span>
    </li>
);

export default MovieProperty;