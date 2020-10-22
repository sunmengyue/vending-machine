import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sardine extends Component {
  render() {
    return (
      <div>
        <h1>Sardine</h1>
        <Link to="/">back</Link>
      </div>
    );
  }
}

export default Sardine;
