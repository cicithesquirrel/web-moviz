import React, { Component } from 'react';
import './App.css';
//import MoviesTable from './MoviesTable';
import MoviesListContainer from './MoviesListContainer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1><i className="fa fa-film"></i> Welcome to Web Moviz</h1>
        </div>
        <MoviesListContainer />
      </div>
    );
  }
}

export default App;
