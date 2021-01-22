import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import home from './components/home'
import profile from './components/profile'
import withAuth from './components/withAuth'
import login from './components/login'
import './App.css';

function App() {
  return (
      <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/secret">Secret</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/secret" component={withAuth(profile)} />
            <Route path="/login" component={login} />
          </Switch>
      </Router>
  );
}

export default App;