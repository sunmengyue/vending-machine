import React from 'react';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Sardine from './Sardine';
import Chips from './Chips';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={VendingMachine} />
      <Route exact path="/soda" component={Soda} />
      <Route exact path="/chips" component={Chips} />
      <Route exact path="/sardine" component={Sardine} />
    </Switch>
  </Router>
);

export default App;
