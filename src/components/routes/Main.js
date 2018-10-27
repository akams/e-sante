import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import './style.scss';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
  </Switch>
);

export default Main;
