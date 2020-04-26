import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import AddItemModal from '../components/AddItemModal/AddItemModal';

const MainTemplate = ({ children }) => (
  <div>
    <NavBar />
    <AddItemModal />
    {children}
  </div>
);

export default MainTemplate;
