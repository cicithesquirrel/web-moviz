import React, { Component } from 'react';
import './MovieListItem.css';

class MovieListItem extends Component {

    render() {
        let url = '/movie/' + this.props.movie.id;
        let countryFlagUrl = '/flags/' + this.props.movie.country + '.png';

        return (
            <a href={url} className="MovieListItem list-group-item">
                <div className="list-group-item-heading">
                    {this.props.movie.title}
                </div>
                <p className="list-group-item-text">
                    {this.props.movie.director}
                </p>
                <p className="list-group-item-text">
                    <img src={countryFlagUrl} alt={this.props.movie.country} title={this.props.movie.country} />&nbsp;
                    {this.props.movie.year}
                </p>
            </a>);
    }
}

export default MovieListItem;