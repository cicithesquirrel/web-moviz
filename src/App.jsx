import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import MoviesListContainer from './list/MoviesListContainer';
import MainLayout from './MainLayout';
import MovieContainer from './detail/MovieContainer';

const App = () => (
      <div className="App">
        <Router history={browserHistory}>
          <Route component={MainLayout}>
            <Route path="/" component={MoviesListContainer} />
            <Route path="/movie/:id" component={MovieContainer} />
          </Route>
        </Router>
      </div>
    );

export default App;
