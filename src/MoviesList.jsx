import React, {Component} from 'react';
import MovieListItem from './MovieListItem';
import './MoviesList.css';
import SearchFilter from './SearchFilter';
import SortList from './SortList';

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
                    <div id="options" className="form-group form-inline">
                        <SearchFilter onChange={this.props.onFilterChange} id="search-filter" label="Filter:" placeholder="Enter text filter..."/>
                        <SortList onChange={this.props.onSortChange} id="sort-option" label="Sort:" />
                    </div>
                    <div className="list-group">
                        {this.props.movies.map((m) => (<MovieListItem key={m.id} movie={m} />))}
                    </div>
                </div>
            </div>);
    }
}

export default MoviesList;