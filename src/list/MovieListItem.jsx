import React, {Component} from 'react';
import './MovieListItem.css';

class MovieListItem extends Component {
    constructor(props) {
        super();
        this.props = props;
    }
  
    render() {
        let url = '/movie/' + this.props.movie.id;

        return (
            <a href={url} className="MovieListItem list-group-item">
                <div className="list-group-item-heading">
                    {this.props.movie.title}
                </div>
                <p className="list-group-item-text">
                    {this.props.movie.director} ({this.props.movie.year})
                </p>
            </a>);
    }
}

export default MovieListItem;