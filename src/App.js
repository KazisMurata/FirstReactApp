import logo from './logo.svg';
import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Divider } from'@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Userinfo from './Userinfo';
import Login from './Login';
import createBrowserHistory from "history/createBrowserHistory"
// import { render } from 'node-sass';
import { Router } from '@material-ui/icons';



const history = createBrowserHistory();

function App() {
  
  const Home = () => (
    <div>
      <h1>Hello User</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
        sed do eiusmod tempor incididunt ut labore et dolore magna<br/>
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
        ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
        Duis aute irure dolor in reprehenderit in voluptate velit <br/>
        esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>
  )

  return (
  <BrowserRouter history={history}>
    <Link to="/">
      <Button variant="outlined" color="primary">Home</Button>
    </Link>
    <Link to="/login">
      <Button variant="outlined" color="primary">LOG IN</Button>
    </Link>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/userinfo" component={Userinfo}/>
  </BrowserRouter>

  );
}

export default App;
