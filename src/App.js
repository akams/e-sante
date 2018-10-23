import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Container } from 'reactstrap';

import './App.css';
// import Header from 'components/molecules/Header/Header';
// import Main from 'components/molecules/Main/Main';
// import ErrorLoder from 'components/molecules/ErrorLoder/ErrorLoder';
import rootReducer from './redux/reducers';

export const myStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Container>
          <div>
            <span>test</span>
          </div>
          {/* <Header /> */}
          {/* <ErrorLoder /> */}
          {/* <Main /> */}
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

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
