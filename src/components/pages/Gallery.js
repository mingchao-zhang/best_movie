import React from 'react'
import Navbar from '../layout/Navbar';
import OptionBar from '../layout/OptionBar';

function Gallery() {
    return (
        // a wrapper to include all elements since we can only return one global element
        <React.Fragment>
            <Navbar />
            <OptionBar />
            <h1>Movie Gallery</h1>

        </React.Fragment>
    )
}

export default Gallery;