import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Display from './display';

function Routes() {
  return (
    <Switch>
      <Route exact path="/display" component={Display} />
      
    </Switch>
  );
}

export default Routes;
