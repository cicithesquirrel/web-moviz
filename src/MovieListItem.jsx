import React, {Component} from 'react';
import './MovieListItem.css';

class MovieListItem extends Component {
    constructor(props) {
        super();
        this.props = props;
    }
  
    render() {
        return (
            <a href="#" className="MovieListItem list-group-item">
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