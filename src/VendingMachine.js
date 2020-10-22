import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/soda">Soda</Link>
          </li>
          <li>
            <Link to="/chips">Chips</Link>
          </li>
          <li>
            <Link to="/sardine">Fresh Sardines</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default VendingMachine;
