import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList/ProductList';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductView = () => (
  <StyledWrapper>
    <h2>Lista produktów dostępnych w spiżarni</h2>
    <ProductList />
  </StyledWrapper>
);

export default ProductView;
