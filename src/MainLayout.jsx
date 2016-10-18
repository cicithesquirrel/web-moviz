import React, { Component } from 'react';
import './MainLayout.css';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <h1><i className="fa fa-film"></i> Welcome to Web Moviz</h1>
        </header>
        {this.props.children}
        <footer>
          License: GPL-2.0 (Cyril Chéné, 2016)<br/>
          Icons: <a href="http://fontawesome.io/">FontAwesome</a> & <a href="http://famfamfam.com/">FamFamFam</a><br/>
          Charts: <a href="http://www.chartjs.org/">Chart.js</a>
        </footer>
      </div>
    );
  }
}

export default MainLayout;
