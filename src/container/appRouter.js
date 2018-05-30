import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from '../reducers';
import App from './contactManager';
import Readme from '../components/readMe';

const createStoreWithMiddleware = applyMiddleware(promise);

const store = createStore(
  reducers,
  createStoreWithMiddleware,
);

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default AppRouter;
