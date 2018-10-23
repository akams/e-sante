import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import DashboardRoute from '../../routes/Dashboard';
// import ReportingRoute from '../../routes/Reporting';
// import UserManagmentRoute from '../../routes/UserManagment';
import './style.scss';

const Main = () => (
  <Switch>
    {/* <Route exact path="/" component={DashboardRoute} />
    <Route path="/reporting" component={ReportingRoute} />
    <Route path="/usermanagment" component={UserManagmentRoute} /> */}
  </Switch>
);

export default Main;
