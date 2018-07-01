import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Restaurant from './Components/Restaurant/Restaurant';

let reducers = function(){};
let store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={{width: "100%", height: "100%" }}>
            <div style={{width: "100%", height: "100%" }}>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/restaurant/:name" component={Restaurant} />
              <Route exact path="/restaurant/:name/:menu" component={Restaurant} />
              {/* <Route exact path="/restaurant/:name/:menu/:product" component={ProductCard} /> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
