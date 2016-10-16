import React, {Component} from 'react';
import MovieProperty from './MovieProperty';
import MovieAltTitles from './MovieAltTitles';
import './Movie.css';

class Movie extends Component {
  
    render() {
        let movie = this.props.movie;
        return (
            <div className="Movie">
                <h2>{movie.title}</h2>
                {movie['alt-titles'] && <MovieAltTitles titles={movie['alt-titles']} />}
                <section>
                    <h3>Details</h3>
                    <ul>
                        <MovieProperty label="Director(s):" value={movie.director} />
                        <MovieProperty label="Year:" value={movie.year} />
                        <MovieProperty label="Duration:" value={movie.duration} />
                    </ul>
                </section>
            </div>);
    }
}

export default Movie;