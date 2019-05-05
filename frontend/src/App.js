// frontend/App.js
import React, { Component } from "react";
import HOC from './components/hoc';

class App extends Component {
  state = {
    data: []
  }

  // here is our UI
  // it is easy to understand their functions when you 
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <HOC data={ data }/>
    );
  }
}

export default App;