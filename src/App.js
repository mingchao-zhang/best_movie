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
      galleryMovies: [],
      searchMovies: [],
      genres: []
    }
  }

  componentDidMount() {
    for (var i = 1; i < 11; i++) {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2fd33e07d0f026484d480953158926e1&language=en-US&page=' + i.toString())
      .then(res => {
        this.setState(
          {movies: this.state.movies.concat(res.data.results),
          galleryMovies: this.state.galleryMovies.concat(res.data.results)}
        );
      })
    }
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2fd33e07d0f026484d480953158926e1&language=en-US')
    .then(res => this.setState({genres: res.data.genres}));

    // Why doesn't this work?
    //this.setState({ galleryMovies: [...this.state.movies]});
  }

  filterMovies = (id) => {
    this.setState({ galleryMovies: [...this.state.movies.filter(movie => movie.genre_ids.includes(id))]
    })
  }

  showAllMovies = () => {
    this.setState({ galleryMovies: [...this.state.movies]
    })
  }

  searchMovieHandler = (e) => {
    if (e.target.value === "") {
      this.setState({ searchMovies: [] });
      return;
    }
    this.setState({ searchMovies: [...this.state.movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()))]
    });
    //console.log(this.state.searchMovies)
  }

  render() {
    // We have to wrap everything inside BrowserRouter if we want to use Router
    return (
      <Router>
        <div className="App">  
          <Route exact path='/best_movie/' render={ () => <Search 
            searchMovies={this.state.searchMovies}
            searchMovieHandler={this.searchMovieHandler}
          /> }
          />
          <Route path="/Gallery" movies={this.state.movies} render={ () => 
          <Gallery 
            galleryMovies={this.state.galleryMovies}
            genres={this.state.genres}
            filterMovies={this.filterMovies}
            showAllMovies={this.showAllMovies}
          /> } 
          />
        </div>
      </Router>
    );
  }
}

export default App;
