import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import SearchProduct from './components/SearchProduct';
import FactoryPage from './components/FactoryPage';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path='/product'>
          <SearchProduct/>
          </Route>

          <Route path='/factorypage'>
            <FactoryPage />
          </Route>
          

          <Route path='/'>
          <SearchPage/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
