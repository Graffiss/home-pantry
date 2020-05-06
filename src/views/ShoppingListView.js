import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProductList from '../components/ProductList/ProductList';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShoppingListView = ({ items }) => {
  const shoppingItems = items.filter((item) => item.amount <= item.minAmount && item);

  return (
    <StyledWrapper>
      <h2>Lista produktów do kupienia:</h2>
      <ProductList items={shoppingItems} />
    </StyledWrapper>
  );
};

const mapStateToProps = ({ items }) => ({ items });

ShoppingListView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      minAmount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(ShoppingListView);
