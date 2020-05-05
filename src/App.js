import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import MainTemplate from './templates/MainTemplate';
import ProductView from './views/ProductView';
import ShoppingListView from './views/ShoppingListView';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={ProductView} />
          <Route path="/lista-zakupow" component={ShoppingListView} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default App;
