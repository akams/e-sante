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

export const myStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

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

// App
const ReduxApp = () => (
  <Provider store={myStore}>
    <App />
  </Provider>
);
export default ReduxApp;
