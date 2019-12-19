import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Results from '../pages/Results';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      
      <Route path="/results" component={Results} />
    </Switch>
  );
}
