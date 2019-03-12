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
    super(props);
    this.state = {
      movies: [],
      galleryMovies: [],
      searchMovies: [],
      genres: [],
      order: "Ascending",
      sortAttr: "vote_average",
    };
    this.pageNum = 20;
    this.total = 0;
    this.itr = 0;
    this.movieCopies = []
  }

  addRank(res) {
    this.movieCopies = this.movieCopies.concat(res.data.results);
    this.itr += 1;
    if (this.itr === this.pageNum) {

      for (var i = 0; i < this.movieCopies.length; i++) {
        this.movieCopies[i]["rank"] = i + 1;
      }
      this.setState({movies: this.movieCopies,
        galleryMovies: this.movieCopies})
    }
  }

  componentDidMount() {
    for (var i = 1; i < this.pageNum + 1; i++) {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2fd33e07d0f026484d480953158926e1&language=en-US&page=' + i.toString())
      .then(res => {
        this.setState(this.addRank(res))
        });
      }
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2fd33e07d0f026484d480953158926e1&language=en-US')
    .then(res => this.setState({genres: res.data.genres}));
  }

  changeSortAttr = (e) => {
    const selector = e.target;
    var newSortAttr;
    
    if (selector[selector.selectedIndex].value === "0") {
      newSortAttr = "vote_average";
    }
    else {
      newSortAttr = "title";
    }
    
    this.setState({ sortAttr: newSortAttr });
    this.sortMovieHelper(this.state.order, newSortAttr);

  }

  filterMovies = (id) => {
    console.log(this.movieCopies);
    this.setState({ galleryMovies: [...this.state.movies.filter(movie => movie.genre_ids.includes(id))]
    });
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
  }

  compareByRank(a, b) {
    if (a.rank < b.rank) {
      return -1;
    }
    else if (a.rank > b.rank) {
      return 1;
    }
    else {
      return 0;
    }
  }

  compareByTitle(a, b) {
    //console.log(this.movieCopies)
    if (a.title < b.title) {
      return -1;
    }
    else if (a.title > b.title) {
      return 1;
    }
    else {
      return 0;
    }
  }

  sortMovieHelper(order, sortAttr) {
    var cmpFunc = null;
    if (sortAttr === "vote_average") {
      cmpFunc = this.compareByRank;
    }
    else {
      cmpFunc = this.compareByTitle;
    }
    if (order === "Ascending") {
      this.setState({ searchMovies: this.state.searchMovies.sort(cmpFunc) });
    }
    else {
      this.setState({ searchMovies: this.state.searchMovies.sort(cmpFunc).reverse() });
    }
  }

  sortMovie = (e) => {
    if (e.target.id === "Ascending" || e.target.id === "AscendingText") {
      this.setState({ order: "Ascending" });
      this.sortMovieHelper("Ascending", this.state.sortAttr);
    }
    else {
      this.setState({ order: "Descending" });
      this.sortMovieHelper("Descending", this.state.sortAttr);
    }
  }

  //WHy do I have to do =() =>???
  showModal = (rank) => {

    var modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "flex";

    var movie = this.movieCopies[rank - 1];
    var image = document.getElementById("_modal_image");
    image.src = "https://image.tmdb.org/t/p/w185/" + movie.poster_path;
    image.alt = movie.title;
    
    var title = document.getElementById("_modal_title");
    title.innerHTML = "<h2>" + movie.title + "</h2>";
    var description = document.getElementById("_modal_description");
    description.innerHTML =  "<p>" + movie.overview + "</p>";
  }

  render() {
    // We have to wrap everything inside BrowserRouter if we want to use Router
    return (
      <Router>
        <div className="App">  
          <Route exact path='/best_movie/' render={ () => <Search 
            searchMovies={this.state.searchMovies}
            searchMovieHandler={this.searchMovieHandler}
            sortMovie={this.sortMovie}
            changeSortAttr={this.changeSortAttr}
            showModal={this.showModal}
          /> }
          />
          <Route path="/best_movie/Gallery" movies={this.state.movies} render={ () => 
          <Gallery 
            galleryMovies={this.state.galleryMovies}
            genres={this.state.genres}
            filterMovies={this.filterMovies}
            showAllMovies={this.showAllMovies}
            showModal={this.showModal}
          /> } 
          />
        </div>
      </Router>
    );
  }
}

export default App;
