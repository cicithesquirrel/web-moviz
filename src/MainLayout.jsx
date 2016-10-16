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
      </div>
    );
  }
}

export default MainLayout;
