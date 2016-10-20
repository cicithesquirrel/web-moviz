import React, {Component} from 'react';
import MovieProperty from './MovieProperty';
import MovieAltTitles from './MovieAltTitles';
import './Movie.css';

class Movie extends Component {
  
    render() {
        let movie = this.props.movie;
        let countryImage = <img src={'/flags/' + movie.country + '.png'} alt={movie.country} title={this.props.movie.country}/>;
        return (
            <div className="Movie container-fluid">
                <h2>{movie.title}&nbsp;
                    {movie['imdb-ref'] && <a target="_blank" href={'http://www.imdb.com/title/' + movie['imdb-ref']} title="Go to IMDB"><i className="fa fa-globe"></i></a>}
                </h2>
                <div className="row">
                    <section className="col-xs-12 col-sm-7">
                        <h3>Details</h3>
                        <ul>
                            <MovieProperty label="Director(s):" value={movie.director} linkValue={movie.director} />
                            <MovieProperty label="Country:" value={countryImage} linkValue={movie.country} />
                            <MovieProperty label="Year:" value={movie.year} linkValue={movie.year} />
                            <MovieProperty label="Duration:" value={movie.duration} />
                        </ul>
                    </section>
                    {movie['alt-titles'] && <section className="col-xs-12 col-sm-5">
                            <MovieAltTitles titles={movie['alt-titles']} />
                        </section>}
                </div>
            </div>);
    }
}

export default Movie;