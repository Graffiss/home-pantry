import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../ProductItem/ProductItem';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
}));

const ProductList = ({ items }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <List dense={false}>
          {items.map(({ id, name, amount, minAmount, category, icon }) => (
            <ProductItem
              key={id}
              id={id}
              name={name}
              amount={amount}
              minAmount={minAmount}
              category={category}
              icon={icon}
            />
          ))}
        </List>
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(ProductList);
