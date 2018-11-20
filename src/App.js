import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Container } from 'reactstrap';

import './App.css';
import Header from './components/molecules/Header/Header';
import Main from './components/routes/Main';
import rootReducer from './redux/reducers';

console.log('process.env', process.env);

const REACT_APP_DEVTOOLS = process.env.REACT_APP_DEVTOOLS
  ? JSON.parse(process.env.REACT_APP_DEVTOOLS)
  : false;

const middleware = REACT_APP_DEVTOOLS
  ? composeWithDevTools(applyMiddleware(thunk))
  : applyMiddleware(thunk);

export const myStore = createStore(rootReducer, middleware);

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <Main />
        </Container>
      </div>
    );
  }
}

const ReduxApp = () => (
  <Provider store={myStore}>
    <App />
  </Provider>
);

export default ReduxApp;
