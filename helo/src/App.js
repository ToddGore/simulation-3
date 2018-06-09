import React, { Component } from 'react';
import './reset.css';
import './App.css';
// import './components/flexbox-grid.css'
import Nav from './components/nav/Nav'
import routes from './routes'

class App extends Component {




  render() {
    return (
      <div className="App">
        <div className="app-nav"><Nav /></div>
        <div className="app-routes">{routes}</div>
      </div>
    );
  }
}

export default App;
