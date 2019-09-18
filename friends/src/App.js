import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

import FriendList from './components/FriendList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className='nav'>
          <NavLink className='link' to='/login'>Login</NavLink>
          <NavLink className='link' to='/friends'>Friends</NavLink>
        </nav>
        <Switch>
          <PrivateRoute exact path='/friends' component={FriendList} />
          <Route exact path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
