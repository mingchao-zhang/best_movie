import React, { Component } from 'react';
//import PropTypes from 'prop-types';
/*
function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }
*/

export class SearchMovieItem extends Component {
    render() {
        return (
            <p>hello, this works!</p>
        )
    }
}

/*
     this.props.movies.map((movie) => (
                <div><p key={movie.id}>{movie.title}</p> </div>
            ))       
*/
export default SearchMovieItem;