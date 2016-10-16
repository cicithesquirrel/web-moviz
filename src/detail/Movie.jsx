import React, {Component} from 'react';
import MovieProperty from './MovieProperty';
import './Movie.css';

class Movie extends Component {
  
    render() {
        return (
            <div className="Movie">
                <h2>{this.props.movie.title}</h2>
                <ul>
                    <MovieProperty label="Director(s):" value={this.props.movie.director} />
                    <MovieProperty label="Year:" value={this.props.movie.year} />
                    <MovieProperty label="Duration:" value={this.props.movie.duration} />
                </ul>
            </div>);
    }
}

export default Movie;