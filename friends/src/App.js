import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import FriendList from './components/FriendList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <link to='/login'>Login</link>
          <link to='/friends'>Friends</link>
        </nav>
        <Switch>
          <PrivateRoute exact path='/friends' component={FriendList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
