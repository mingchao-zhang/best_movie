import React, {Component} from 'react'
//import {Link} from "react-router-dom";
import Navbar from '../layout/Navbar';
import OptionBar from '../layout/OptionBar';
import './Gallery.scss'
//import { generateKeyPair } from 'crypto';

class GenreItemDisplay extends Component {
    render() {
        return <div className="genreItem">{ this.props.genreName }</div>
    }
    
}

class GenreItemsDisplay extends Component {
    render() {
        return (this.props.genres.map((genre) => (
        <GenreItemDisplay key={genre.id} genreName={genre.name} />))
        )
    }
}

class Gallery extends Component  {
    GenreItemsDisplay = () => {
        return (this.props.genres.map((genre) => (
                <GenreItemDisplay key={genre.id} value={genre.name} />))
                )
    }

    render() {
    return (
        // a wrapper to include all elements since we can only return one global element
        <React.Fragment>
            <Navbar />
            <OptionBar />
            <div className="genreList">
            <GenreItemsDisplay genres={this.props.genres} />
            </div>
            <h1>Movie Gallery</h1>

        </React.Fragment>
    )
    }
}

export default Gallery;