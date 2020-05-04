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
    <>
      {items.length === 0 ? (
        'W spiżarni jest pusto :('
      ) : (
        <div className={classes.root}>
          <Grid container spacing={3}>
            {items.map(({ id, name, amount, minAmount, category, icon }) => (
              <Grid item xs={12} sm={4}>
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

const mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(ProductList);
