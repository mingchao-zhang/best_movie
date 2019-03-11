import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar" >
        <div className="homeIconContainer">
        <Link to="/best_movie" className="homeIconLink">
          <i className="fas fa-home" id="homeIcon"></i>
        </Link>
        </div>

        <p>Best Movies</p>
        
        <div className="dummy">
          {/* for flex box to work */}
        </div>
      </div>
    );
  }
}

export default Navbar;
