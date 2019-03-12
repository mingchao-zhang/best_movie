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
                <div className="genreItemAll" onClick={this.props.showAllMovies}><p>All</p></div>
                <GenreItemsDisplay genres={this.props.genres} filterMovies={this.props.filterMovies} />
            </div>
            <div className="galleryMovieList">
                <GalleryMoviesDisplay galleryMovies={this.props.galleryMovies} />
            </div>
        </React.Fragment>
    )
    }
}

//--------------------------------------------------------
class GenreItemDisplay extends Component {
    render() {
        const {id, name} = this.props.genre;
        return <div className="genreItem" onClick={this.props.filterMovies.bind(this, id)}>
                    <p>{ name }</p>
                </div>
    }
    
}

//--------------------------------------------------------
class GenreItemsDisplay extends Component {
    render() {
        return (this.props.genres.map((genre) => (
                <GenreItemDisplay key={genre.id} genre={genre} filterMovies={this.props.filterMovies} />
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
        return (this.props.galleryMovies.map((movie) => (
                <GalleryMovieDisplay key={movie.id} movie={movie} />
        ))
        )
    }
}
export default Gallery;

