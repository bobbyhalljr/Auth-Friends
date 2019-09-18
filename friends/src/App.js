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
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path='/friends' component={FriendList} />
          <Route exact path='/login' component={Login} />
          <Route exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
