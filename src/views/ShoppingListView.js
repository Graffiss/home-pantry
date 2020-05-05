import React from 'react';
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

export default connect(mapStateToProps)(ShoppingListView);
