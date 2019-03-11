import React from 'react'
import Navbar from '../layout/Navbar';
import './Search.scss'

function Search() {
    return (
        // a wrapper to include all elements since we can only return one global element   
        <React.Fragment>
            <Navbar />
            <input placeholder="Enter the movie name" className="inputBox"/>
            <h1>Movie Search</h1>
        </React.Fragment>
    )
}

export default Search;