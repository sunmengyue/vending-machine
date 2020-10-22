import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class VendingMachine extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link exact to="/">
                Vending Machine
              </Link>
            </li>
            <li>
              <Link exact to="/soda">
                Soda
              </Link>
            </li>
            <li>
              <Link exact to="/chips">
                Chips
              </Link>
            </li>
            <li>
              <Link exact to="/freshSardines">
                Fresh Sardines
              </Link>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}

export default VendingMachine;
