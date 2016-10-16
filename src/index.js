import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import Movie from './Movie';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/movie/:id" component={Movie} />
  </Router>,
  document.getElementById('root')
);
