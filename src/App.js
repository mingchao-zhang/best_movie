import React, { Component } from 'react';
import Projects from './Components/Project'
import Navbar from './Components/Navbar'
import './App.css';


/*
There can only be one top level div in the return statement
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        Hello
        <Projects />
      </div>
    );
  }
}

export default App;
