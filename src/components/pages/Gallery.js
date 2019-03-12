import React, {Component} from 'react'
//import {Link} from "react-router-dom";
import Navbar from '../layout/Navbar';
import OptionBar from '../layout/OptionBar';
import './Gallery.scss'
//import { generateKeyPair } from 'crypto';

//--------------------------------------------------------
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
                <div className="genreItem"><p>All</p></div>
                <GenreItemsDisplay genres={this.props.genres} />
            </div>
            <div className="galleryMovieList">
                <GalleryMoviesDisplay movies={this.props.movies} />
            </div>
        </React.Fragment>
    )
    }
}

//--------------------------------------------------------
class GenreItemDisplay extends Component {
    render() {
        return <div className="genreItem">
                    <p>{ this.props.genreName }</p>
                </div>
    }
    
}

//--------------------------------------------------------
class GenreItemsDisplay extends Component {
    render() {
        return (this.props.genres.map((genre) => (
                <GenreItemDisplay key={genre.id} genreName={genre.name} />
        ))
        )
    }
}

//movie prefex: https://image.tmdb.org/t/p/w185/
//--------------------------------------------------------
class GalleryMovieDisplay extends Component {
    render() {
        const movie = this.props.movie;
        const movie_src = "https://image.tmdb.org/t/p/w185/" + movie.poster_path;
        return <div className="galleryMoviePic">
                    <img src={movie_src} alt={movie.title} />
                </div>
    }
}

//--------------------------------------------------------
class GalleryMoviesDisplay extends Component {
    render() {
        return (this.props.movies.map((movie) => (
                <GalleryMovieDisplay key={movie.id} movie={movie} />
        ))
        )
    }
}
export default Gallery;

