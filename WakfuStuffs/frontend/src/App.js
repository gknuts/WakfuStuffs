import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import wakfuApp from "./reducers";

import WakfuStuffs from "./components/WakfuStuffs";
import NotFound from "./components/NotFound";

let store = createStore(wakfuApp, applyMiddleware(thunk));

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WakfuStuffs} />
            <Route component={NotFound} />
          </Switch>
          </BrowserRouter>
        </Provider>
      );
  }
}

export default App;
