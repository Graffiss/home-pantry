import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProductList from '../components/ProductList/ProductList';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductView = ({ items }) => (
  <StyledWrapper>
    <h2>Lista produktów dostępnych w spiżarni</h2>
    <ProductList items={items} />
  </StyledWrapper>
);

const mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(ProductView);
