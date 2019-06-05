import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from '../container/firstScreen/index';
import HeaderComponent from './layout/header';
import ScreenTwo from '../container/secondScreen/index';

const HOC = () => (

  // here is our UI
  // it is easy to understand their functions
 
  <div className='container'>
    <HeaderComponent />
    <Router>
      <Switch>
        <Route path={'/'} component={HomeComponent} exact/>
        <Route path={'/result/:tickerKey'} component={ ScreenTwo } exact />
        <Route path={'/error'} component={() => (<p>Something wentt wrong</p>)} />
        <Route component={() => (<p> Path not found </p>)} />
      </Switch>
    </Router>
  </div>   

)

export default HOC;