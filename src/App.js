import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainTemplate from './templates/MainTemplate';
import ProductView from './views/ProductView';

const App = () => (
  <Provider store={store}>
    <MainTemplate>
      <ProductView />
    </MainTemplate>
  </Provider>
);

export default App;
