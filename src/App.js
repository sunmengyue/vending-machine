import React from 'react';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Sardine from './Sardine';
import Chips from './Chips';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" render={() => <VendingMachine />} />
      <Route exact path="/soda" render={() => <Soda />} />
      <Route exact path="/chips" render={() => <Chips />} />
      <Route exact path="/sardine" render={() => <Sardine />} />
    </Switch>
  </div>
);

export default App;
