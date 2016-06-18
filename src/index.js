import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App/App';
import NewExperiment from './NewExperiment/NewExperiment';

import rootReducer from './reducers';

const store = createStore(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/new-experiment" component={NewExperiment} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
