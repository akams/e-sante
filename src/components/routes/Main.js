import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import PrivateRoute from './PrivateRoute';
import UserRoute from './UserRoute';
import './style/style.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <PrivateRoute path="/user" component={UserRoute} auth={this.props.auth} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(Main));
