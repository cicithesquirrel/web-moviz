import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
  
    render() {
        return (
            <div>
                <h2>{this.props.movie.title}</h2>
            </div>);
    }
}

export default Movie;