import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar/NavBar';
import AddItemModal from '../components/AddItemModal/AddItemModal';

const MainTemplate = ({ children }) => (
  <div>
    <NavBar />
    <AddItemModal />
    {children}
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
