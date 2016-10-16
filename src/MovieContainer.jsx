import React, {Component} from 'react';
import DataProvider from './DataProvider';
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
            <Movie movie={this.state.movie} />
        );
    }
}

export default MovieContainer;