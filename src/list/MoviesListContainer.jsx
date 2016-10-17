import React, {Component} from 'react';
import MoviesList from './MoviesList';
import DataProvider from '../data/DataProvider';

class MoviesListContainer extends Component {

    constructor(props) {
        super(props);

        let query = this.props.location.query;
        this.state = {
            movies: [],
            options: {filter: (query.f || ''), sort: (query.s || 'title')}
        };
        this.onFilterChange = this._onFilterChange.bind(this)
        this.onSortChange = this._onSortChange.bind(this)
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

    _onSortChange(sortValue) {
        let options = this.state.options;
        options.sort = sortValue;

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
                <ol className="breadcrumb">
                    <li><a href="#">Movies</a></li>
                </ol>
                <MoviesList 
                    movies={this.state.movies}
                    filter={this.state.options.filter}
                    sort={this.state.options.sort}
                    onFilterChange={this.onFilterChange}
                    onSortChange={this.onSortChange}/>
            </div>
        );
    }
}

export default MoviesListContainer;