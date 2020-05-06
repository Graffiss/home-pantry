import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../ProductItem/ProductItem';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    minWidth: 752,
    maxWidth: 752,
  },
}));

const ProductList = ({ items }) => {
  const classes = useStyles();

  return (
    <>
      {items.length === 0 ? (
        'Brak produktów'
      ) : (
        <div className={classes.root}>
          <Grid container spacing={3}>
            {items.map(({ id, name, amount, minAmount, category, icon }) => (
              <Grid key={id} container item xs={12} sm={4}>
                <ProductItem
                  key={id}
                  id={id}
                  name={name}
                  amount={amount}
                  minAmount={minAmount}
                  category={category}
                  icon={icon}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

ProductList.propTypes = {
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

export default ProductList;
