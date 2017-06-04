import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Films from "./Components/Film/Films.js"
import Header from "./Components/Header/Header.js"
import Users from "./Components/Users/Users.js"
import Login from "./Components/Login/Login.js"
import Post from "./Components/Post/Post.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import About from "./Components/About/About.js";
import Companies from "./Components/Companies/Companies.js";
import Signup from "./Components/Signup/Signup.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          

          <Route exact path="/" component={Signup} />
          <Route path="/starwars" component={Films} />
          <Route path="/register" component={Post} />
          <Route path="/display-users" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard/:userId" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/companies" component={Companies} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App