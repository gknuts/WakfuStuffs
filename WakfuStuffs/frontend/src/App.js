import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";

import wakfuApp from "./reducers";

import WakfuStuffs from "./components/WakfuStuffs";
import NotFound from "./components/NotFound";

import thunk from 'redux-thunk';

let middles = [thunk,]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(...middles),
)
let store = createStore(wakfuApp, enhancer);
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
