import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
    constructor(props) {
        super();
        this.props = props;
    }
  
    render() {
        return (
            <div>
                <h2>Movie {this.props.params.id}</h2>
            </div>);
    }
}

export default Movie;