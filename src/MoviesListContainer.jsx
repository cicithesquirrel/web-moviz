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
        this.setState({
            movies: DataProvider.getMovies(this.state.options)
        });
    }

    _onFilterChange(filterText) {
        let options = this.state.options;
        options.filter = filterText;
        this.setState({
            options: options,
            movies: DataProvider.getMovies(options)
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