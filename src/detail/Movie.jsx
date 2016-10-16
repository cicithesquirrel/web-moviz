import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
  
    render() {
        return (
            <div className="Movie">
                <h2>{this.props.movie.title}</h2>
                <ul>
                    <li><span className="property">Director(s):</span> <span className="value">{this.props.movie.director}</span></li>
                    <li><span className="property">Year:</span> <span className="value">{this.props.movie.year}</span></li>
                    <li><span className="property">Duration (min):</span> <span className="value">{this.props.movie.duration}</span></li>
                </ul>
            </div>);
    }
}

export default Movie;