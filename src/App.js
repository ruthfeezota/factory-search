import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchPage from './components/SearchPage';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* This is the default route */}
          <Route path='/'>
          <SearchPage/>
          </Route>



        </Switch>
      </div>
    </Router>
  );
}

export default App;
