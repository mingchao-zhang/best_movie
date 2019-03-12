import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import Navbar from '../layout/Navbar';
import OptionBar from '../layout/OptionBar';
import './Search.scss'

class Search extends Component {
    render() {
    return (
        // a wrapper to include all elements since we can only return one global element   
        <React.Fragment>
            <Navbar />
            <OptionBar />
            <div className="searchBar">
                <div className="searchBarTop">
                    <input placeholder="Enter the movie name (Use spaces properly)" className="inputBox" onChange={this.props.searchMovieHandler.bind(this)} />
                    <p>sample name: interstellar, inception, matrix </p>
                    <div className="sortBox">
                        <p>Sort by: </p>
                        <select className="sortItem" onChange={this.props.changeSortAttr}>
                            <option value="0">Rank</option>
                            <option value="1">Name</option>
                        </select>
                    </div>

                    <div className="orderContainer">
                        <button className="orderButton" id="Ascending" onClick={this.props.sortMovie.bind(this)}>
                            <p id="AscendingText">Ascending</p>
                        </button>
                        <button className="orderButton" id="Descending" onClick={this.props.sortMovie.bind(this)}>
                            <p id="DescendingText">Descending</p>
                        </button>
                    </div>  
                </div>
                <div className="searchBarBot">
                    <div className="searchMovieList">
                        <SearchMoviesDisplay 
                            searchMovies={this.props.searchMovies}
                            showModal={this.props.showModal}
                        />
                    </div>     
                </div>
            </div>
            
        </React.Fragment>
    )
    }
}

//movie prefex: https://image.tmdb.org/t/p/w185/
//--------------------------------------------------------
class SearchMovieDisplay extends Component {
    render() {
        const movie = this.props.movie;
        const movie_src = "https://image.tmdb.org/t/p/w185/" + movie.poster_path;
        return  <div className="searchMovieItem" onClick={this.props.showModal.bind(this, movie.id)}>
                    <div className="searchMoviePic">
                        <img src={movie_src} alt={movie.title} />
                    </div>
                    <div className="searchMovieText">
                        <div className="searchMovieTitle">
                            <p>{ movie.title }</p>
                        </div>
                        <div className="searchMovieRank">
                            <p>Rating: { movie.vote_average }</p>
                        </div>
                    </div>
                </div>
    }
}

//--------------------------------------------------------
class SearchMoviesDisplay extends Component {
    render() {
        return (this.props.searchMovies.map((movie) => (
                <SearchMovieDisplay 
                    key={movie.id} 
                    movie={movie} 
                    showModal={this.props.showModal}
                />
        ))
        )
    }
}

export default Search;