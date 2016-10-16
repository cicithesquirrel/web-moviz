import React, {Component} from 'react';
import MovieListItem from './MovieListItem';
import './MoviesList.css';
import SearchFilter from './SearchFilter';

class MoviesList extends Component {
    constructor(props) {
        super();
        this.props = props;
    }
  
    render() {
        return (
            <div className="MoviesList panel panel-primary">
                <div className="panel-heading">Movies list</div>
                <div className="panel-body">
                    <SearchFilter onChange={this.props.onFilterChange} id="search-filter" label="Filter:" placeholder="Enter text filter..."/>
                    <div className="list-group">
                        {this.props.movies.map((m) => (<MovieListItem key={m.id} movie={m} />))}
                    </div>
                </div>
            </div>);
    }
}

export default MoviesList;