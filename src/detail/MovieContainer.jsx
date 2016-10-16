import React, {Component} from 'react';
import DataProvider from '../data/DataProvider';
import Movie from './Movie';

class MovieContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        let that = this;
        DataProvider.getMovie(this.props.params.id, function(m) {
            that.setState({
                movie: m
            });
        });
    }
  
    render() {
        return (
            <div>
                <ol className="breadcrumb">
                    <li><a href="/">Movies</a></li>
                    <li><a href="#">{this.state.movie.title}</a></li>
                </ol>
                <Movie movie={this.state.movie} />
            </div>
        );
    }
}

export default MovieContainer;