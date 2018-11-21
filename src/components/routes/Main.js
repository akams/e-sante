import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import PrivateRoute from './PrivateRoute';
import UserRoute from './UserRoute';

import { dispatchMeFromToken } from '../../redux/action/auth';

import './style/style.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // console.log('this.props.auth', this.props.auth);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.status === 'authenticated' || this.props.auth.status === 'authenticated') {
      console.log('this.props.auth', this.props.auth);
      console.log('nextProps.auth', nextProps.auth);
      if (this.props.auth.accessToken || nextProps.auth.accessToken) {
        return;
      } else {
        this.loadUserFromToken();
      }
    }
  }

  loadUserFromToken() {
    let token = sessionStorage.getItem('jwtToken');
    if (!token || token === '') {
      //if there is no token, dont bother
      return;
    }
    this.props.dispatchMeFromTokenFunction(token);
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

const mapDispatchToProps = {
  dispatchMeFromTokenFunction: tokenFromStorage => dispatchMeFromToken(tokenFromStorage),
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
