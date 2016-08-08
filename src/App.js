import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h2>React test app</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
