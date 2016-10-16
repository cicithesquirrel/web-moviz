import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import MoviesListContainer from './MoviesListContainer';
import MainLayout from './MainLayout';
import Movie from './Movie';

const App = () => (
      <div className="App">
        <Router history={browserHistory}>
          <Route component={MainLayout}>
            <Route path="/" component={MoviesListContainer} />
            <Route path="/movie/:id" component={Movie} />
          </Route>
        </Router>
      </div>
    );

export default App;
