import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PreDefined from './perDefinedHooks';
class App extends Component {
  render() {
    return (
      <div className="App">
      <PreDefined/>
      </div>
    );
  }
}

export default App;
