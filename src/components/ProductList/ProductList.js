import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../ProductItem/ProductItem';
import { store } from '../../data/store';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
}));

const ProductList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <List dense={false}>
          {store.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              name={item.name}
              amount={item.amount}
              minAmount={item.minAmount}
              category={item.category}
            />
          ))}
        </List>
      </Grid>
    </div>
  );
};

export default ProductList;
