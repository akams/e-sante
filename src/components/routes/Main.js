import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import UserRoute from './UserRoute';
import './style.scss';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/user" component={UserRoute} />
  </Switch>
);

export default Main;
