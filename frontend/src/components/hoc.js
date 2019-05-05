import React, { Component } from "react";
import HomeComponent from '../layout/home';
import HeaderComponent from '../layout/header';

class HOC extends Component {

  // here is our UI
  // it is easy to understand their functions when you 
  // see them render into our screen
  render() {
    return (
      <div className='container'>
          <HeaderComponent />
          <HomeComponent />
      </div>
    );
  }
}

export default HOC;