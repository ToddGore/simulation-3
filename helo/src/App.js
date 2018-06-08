import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Grid'>
          <div className='Grid-cell'>
            <Nav />
          </div>
          <div className='Grid-cell'></div>
          <div className='Grid-cell'></div>
          <div className='Grid-cell'></div>
          <div className='Grid-cell'></div>
          <div className='Grid-cell'></div>
          <div className='Grid-cell'></div>
          <div className='Grid-cell'></div>
        </div>

        {routes}
      </div>
    );
  }
}

export default App;
