import React from 'react';
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

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SPIŻARNIA
          </Typography>
          <Badge badgeContent={2} color="error">
            <Button color="secondary" variant="contained">
              Lista zakupów
            </Button>
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
