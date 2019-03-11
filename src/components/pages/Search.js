import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import Navbar from '../layout/Navbar';
import OptionBar from '../layout/OptionBar';
import SearchMovieItem from '../layout/SearchMovieItem';
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
                    <input placeholder="Enter the movie name" className="inputBox"/>

                    <div className="sortBox">
                        <p>Sort by: </p>
                        <select className="sortItem">
                            <option value="0">Rank</option>
                            <option value="1">Name</option>
                        </select>
                    </div>

                    <div className="orderContainer">
                        <button className="orderButton">
                            Ascending
                        </button>
                        <button className="orderButton">
                            Descending
                        </button>
                    </div>  
                </div>
                <SearchMovieItem movies={this.props.movies} />
                <div className="searchBarBot">
                
                    <div className="searchMovieItem">
                        <div className="searchMoviePic">
                        </div>
                        <div className="searchMovieText">
                            <div className="searchMovieTitle">
                                <p>{/* this.props.movies.title */}</p>
                            </div>
                            <div className="searchMovieRank">
                                <p>{ /*this.props.movies.vote_average */}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
    }
}

export default Search;