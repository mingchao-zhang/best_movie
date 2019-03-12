import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Gallery from './components/pages/Gallery'
import Search from './components/pages/Search'
import axios from 'axios';


/*
There can only be one top level div in the return statement
*/
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      genres: []
    }
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2fd33e07d0f026484d480953158926e1&language=en-US')
    .then(res => this.setState({genres: res.data.genres}));

    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2fd33e07d0f026484d480953158926e1&language=en-US&page=1')
    .then(res => this.setState({movies: res.data.results}));
  }

  render() {
    // We have to wrap everything inside BrowserRouter if we want to use Router
    return (
      <Router>
        <div className="App">  
          <Route exact path='/best_movie/' render={ () => <Search 
            movies={this.state.movies} 
            genres={this.state.genres} /> }
          />
          <Route path="/Gallery" movies={this.state.movies} render={ () => 
          <Gallery 
            movies={this.state.movies}
            genres={this.state.genres}
          /> } 
          />
        </div>
      </Router>
    );
  }
}

export default App;
