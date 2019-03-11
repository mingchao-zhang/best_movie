import React from 'react'
import Navbar from '../layout/Navbar';

function Search() {
    return (
        // a wrapper to include all elements since we can only return one global element   
        <React.Fragment>
            <Navbar />
            <input placeholder="Enter the movie name" style  = {{
                  marginTop: '5px',
                  padding: '5px',
                  display: 'block',
                  fontSize: '1rem',
                  width: '100%',
                  textAlign: 'center'
                }}/>
            <h1>Movie Search</h1>
        </React.Fragment>
    )
}

export default Search;