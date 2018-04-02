import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Footer from './Components/Footer/Footer.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import RestaurantList from './Components/Restaurant/List';
import Restaurant from './Components/Restaurant/Restaurant';

let reducers = function(){};
let store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div style={{ marginBottom: 70, width: "100%" }}>
              <Route exact path="/" component={Dashboard} />
              <Route path="/city" component={Dashboard} />
              <Route exact path="/restaurant" component={RestaurantList} />
              <Route exact path="/restaurant/:type" component={RestaurantList} />
              <Route exact path="/restaurant/:type/:name" component={Restaurant} />
              <Route exact path="/restaurant/:type/:name/:action" component={Restaurant} />
              <Route path="/profile" component={Dashboard} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
