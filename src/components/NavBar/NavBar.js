import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Badge } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: { flex: 1 },
}));

const NavBar = ({ items }) => {
  const classes = useStyles();

  const shoppingItems = items.filter((item) => item.amount <= item.minAmount && item);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              SPIŻARNIA
            </NavLink>
          </Typography>
          <Badge badgeContent={shoppingItems.length} color="error">
            <NavLink to="/lista-zakupow" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <Button color="secondary" variant="contained">
                Lista zakupów
              </Button>
            </NavLink>
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(NavBar);
