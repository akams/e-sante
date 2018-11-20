import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import User from '../organismes/Home/Home';

const User = () => (
  <div>
    <h1>page user</h1>
  </div>
);

const UserRoute = () => (
  <Switch>
    <Route path="/" component={User} />
  </Switch>
);

export default UserRoute;
