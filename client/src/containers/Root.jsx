import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";

// core components
import Navigator from "./Navigator.jsx";

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Navigator} />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root;