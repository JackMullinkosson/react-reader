import { Switch, Route} from 'react-router-dom'
import React, { useState } from 'react'
import './App.css';
import Home from './Home'
import Beginner from './Beginner'
import Intermediate from './Intermediate'
import Advanced from './Advanced'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={(routerProps) => (
        <Home history={routerProps.history} />
        )}/>
        <Route path='/Beginner' render={(routerProps) => (
        <Beginner  />
      )} />
        <Route path='/Intermediate' render={(routerProps) => (
        <Intermediate />
    )}/>
        <Route path='/Advanced' render={(routerProps) => (
        <Advanced />
    )}/>
     </Switch>
    </div>
    
  );
}

export default App;
