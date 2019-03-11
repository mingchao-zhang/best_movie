import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './OptionBar.scss'

class OptionBar extends Component {
  render() {
    return (
      <div className="OptionBar" >
        <div className="flexDummy"></div>
        <Link to="/" className="optionLink">
            Search
        </Link>
        <Link to="/Gallery" className="optionLink">
            Gallery
        </Link>
        <div className="flexDummy"></div>
      </div>
    );
  }
}

export default OptionBar;
