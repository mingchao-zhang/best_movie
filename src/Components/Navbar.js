import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar" style={NavbarStyle}>
       <p>Best Movies</p>
      </div>
    );
  }
}

const NavbarHeight = '80px';

const NavbarStyle = {
  //position: 'fixed',
  width: '100vw',
  top: '0',
  left: '0',
  zIndex: '99',
  height: NavbarHeight,
  lineHeight: NavbarHeight,
  transition: 'all 1s',
  backgroundColor: 'rgba(0, 0, 0, 1)',
  
  fontSize: '2rem',
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
  textTransform: 'uppercase'
}
export default Navbar;
