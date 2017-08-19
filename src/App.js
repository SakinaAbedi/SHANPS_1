import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App1 extends Component {
  renderHeading1() {
  return <h2>Thank you Nige!</h2>
}
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}
class App extends Component {
  renderHeading() {
  return <h2>Thank you Nigel!</h2>
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{ this.renderHeading() }</h2>
        </div>
        <App1 name='Nigel' />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
