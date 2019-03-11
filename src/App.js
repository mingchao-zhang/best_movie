import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Gallery from './components/pages/Gallery'
import Search from './components/pages/Search'


/*
There can only be one top level div in the return statement
*/
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    /*
    const movies = [
      {id: 0, title: "Lalala", description: "lalalalal"}
    ]
    */
  }

  goHome = (e) => {
    console.log('Hello')
  }

  render() {
    // We have to wrap everything inside BrowserRouter if we want to use Router
    return (
      <Router>
        <div className="App">  
          <Route exact path='/' component={Search} goHome={this.goHome} />
          <Route path="/Gallery" component={Gallery} goHome={this.goHome} />
        </div>
      </Router>
    );
  }
}

export default App;
