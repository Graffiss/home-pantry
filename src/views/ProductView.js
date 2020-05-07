import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProductList from '../components/ProductList/ProductList';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding: 0px 20px;
    text-align: center;
  }
`;

const ProductView = ({ items }) => (
  <StyledWrapper>
    <h2>Lista produktów dostępnych w spiżarni</h2>
    <ProductList items={items} />
  </StyledWrapper>
);

const mapStateToProps = ({ items }) => ({ items });

ProductView.propTypes = {
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

export default connect(mapStateToProps)(ProductView);
