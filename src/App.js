import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import home from './components/home'
import profile from './components/profile'
import withAuth from './components/withAuth'
import login from './components/login'
import post from './components/post'
import image from './components/image'
import './App.css';

function App() {
  return (
      <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/image">Image</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/profile" component={withAuth(profile)} />
            <Route path="/post" component={withAuth(post)} />
            <Route path="/image" component={withAuth(image)} />
            <Route path="/login" component={login} />
          </Switch>
      </Router>
  );
}

export default App;