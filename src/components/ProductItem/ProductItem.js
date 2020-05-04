import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { green } from '@material-ui/core/colors';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  removeItem as removeItemAction,
  editItem as editItemAction,
  toggleModal as toggleModalAction,
} from '../../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 300,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ProductItem = ({ id, name, category, amount, icon, removeItem, editItem, toggleModal }) => {
  const classes = useStyles();

  const handleEdit = () => {
    editItem(id);
    toggleModal();
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Chip label={category} size="small" />
        <Typography gutterBottom variant="subtitle1">
          {name}
        </Typography>
        <ButtonBase className={classes.image}>
          <ListItemAvatar>
            <img className={classes.image} src={icon} alt={name} />
          </ListItemAvatar>
        </ButtonBase>

        <Typography variant="subtitle1">Pozostało: {amount}</Typography>
        <IconButton edge="end" aria-label="edit">
          <EditIcon style={{ color: green[500] }} onClick={() => handleEdit()} />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => removeItem(id)}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </Paper>
    </div>
  );

  /*  return (
    <>
      <StyledListItem>
        <ListItemAvatar>
          <StyledSvgIcon src={icon} alt={name} />
        </ListItemAvatar>
        <ListItemText primary={name} />
        {`Pozostało: ${amount}`}
        <Chip label={category} size="small" />
        <IconButton edge="end" aria-label="edit">
          <EditIcon style={{ color: green[500] }} onClick={() => handleEdit()} />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => removeItem(id)}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </StyledListItem>
    </>
  ); */
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  editItem: (id) => dispatch(editItemAction(id)),
  toggleModal: (modalOpen) => dispatch(toggleModalAction(modalOpen)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
