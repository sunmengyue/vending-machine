import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navebar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/soda">Soda</NavLink>
        <NavLink to="/chips">Chips</NavLink>
        <NavLink to="/sardine">Sardines</NavLink>
      </div>
    );
  }
}

export default Navebar;
