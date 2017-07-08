import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Components/Header/Header.js"
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
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App