import React from 'react';
import MainTemplate from './templates/MainTemplate';
import ProductView from './views/ProductView';

const App = () => (
  <div>
    <MainTemplate>
      <ProductView />
    </MainTemplate>
  </div>
);

export default App;
