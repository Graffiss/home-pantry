import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { green, red } from '@material-ui/core/colors';
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

  outOfProduct: {
    color: red[500],
  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ProductItem = ({
  id,
  name,
  category,
  amount,
  minAmount,
  unit,
  icon,
  removeItem,
  editItem,
  toggleModal,
}) => {
  const classes = useStyles();

  const handleEdit = () => {
    editItem(id);
    toggleModal();
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Chip label={category} size="small" />
        <Typography gutterBottom variant="h6">
          {name}
        </Typography>
        <ButtonBase className={classes.image}>
          <ListItemAvatar>
            <img className={classes.image} src={icon} alt={name} />
          </ListItemAvatar>
        </ButtonBase>

        <Typography variant="subtitle1" className={amount <= minAmount && classes.outOfProduct}>
          Pozostało: {amount} {unit}
        </Typography>
        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit()}>
          <EditIcon style={{ color: green[500] }} />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => removeItem(id)}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </Paper>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  editItem: (id) => dispatch(editItemAction(id)),
  toggleModal: (modalOpen) => dispatch(toggleModalAction(modalOpen)),
});

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  minAmount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProductItem);
