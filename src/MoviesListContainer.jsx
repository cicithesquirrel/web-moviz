import React, {Component} from 'react';
import MoviesList from './MoviesList';
import DataProvider from './DataProvider';

class MoviesListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            options: {filter: '', sort: undefined}
        };
        this.onFilterChange = this._onFilterChange.bind(this)
    }

    componentDidMount() {
        let options = this.state.options;
        let that = this;
        DataProvider.getMovies(options, function(movies) {
            that.setState({
                options: options,
                movies: movies
            });
        });
    }

    _onFilterChange(filterText) {
        let options = this.state.options;
        options.filter = filterText;

        let that = this;
        DataProvider.getMovies(options, function(movies) {
            that.setState({
                options: options,
                movies: movies
            });
        });
    }
  
    render() {
        return (
            <div>
                <MoviesList movies={this.state.movies} onFilterChange={this.onFilterChange}/>
            </div>
        );
    }
}

export default MoviesListContainer;