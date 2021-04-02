import React, { Component, useEffect, useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        (props) => authenticated === true
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/justalk/login', state: { from: props.location } }} />
      }
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route 
      {...rest}
      render={
        (props) => authenticated === true
         ? <Redirect to='/justalk/chat' />
         : <Component {...props} />
      }
    />
  )
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true);
        setLoading(false);
      }
      else {
        setAuthenticated(false);
        setLoading(false);
      }
    })
  });

  return loading === true ? <h2>Loading...</h2> : (
    <Router>
      <Header />
      <Switch>
        <Route 
          exact 
          path="/justalk" 
          component={Home}>
        </Route>
        
        <PrivateRoute 
          path="/justalk/chat" 
          authenticated={authenticated} 
          component={Chat}>
        </PrivateRoute>

        <PublicRoute 
          path="/justalk/signup" 
          authenticated={authenticated} 
          component={SignUp}>
        </PublicRoute>

        <PublicRoute 
          path="/justalk/login" 
          authenticated={authenticated} 
          component={Login}>
        </PublicRoute>
      </Switch>
      {/* <Footer /> */}
    </Router>
  )
}

export default App;
