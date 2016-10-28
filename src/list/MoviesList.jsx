import React from 'react';
import MovieListItem from './MovieListItem';
import './MoviesList.css';
import SearchFilter from './SearchFilter';
import SortList from './SortList';

const MoviesList = ({onFilterChange, onSortChange, movies, sort, filter}) => (
    <div className="MoviesList">
        <div id="options" className="form-group form-inline">
            <SearchFilter onChange={onFilterChange} id="search-filter" label="Filter:" placeholder="Enter text filter..." value={filter} />
            <SortList onChange={onSortChange} id="sort-option" label="Sort:" value={sort} />
            <a href="/stats"><i className="fa fa-area-chart"></i> See stats</a>
        </div>
        <div className="list-group">
            {movies.map((m) => (<MovieListItem key={m.id} movie={m} />))}
        </div>
    </div>
);

export default MoviesList;