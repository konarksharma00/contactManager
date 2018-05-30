import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from '../reducers';
import App from './contactManager';
import OptionModal from '../components/OptionModal';

const createStoreWithMiddleware = applyMiddleware(promise);

const defaultState = {
  contact:undefined
};

const store = createStore(
  reducers,
  defaultState,
  createStoreWithMiddleware,
  );

const AppRouter = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={ App } />
              <Route path="/modal" component={ OptionModal } />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
}

export default AppRouter;
