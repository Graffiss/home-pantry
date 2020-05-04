import React from 'react';
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

const StyledListItem = styled(ListItem)`
  min-width: 40vw;
`;

const StyledSvgIcon = styled.img`
  max-width: 48px;
  max-height: 48px;
`;

const ProductItem = ({ id, name, category, amount, icon, removeItem, editItem, toggleModal }) => {
  const handleEdit = () => {
    editItem(id);
    toggleModal();
  };

  return (
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
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  editItem: (id) => dispatch(editItemAction(id)),
  toggleModal: (modalOpen) => dispatch(toggleModalAction(modalOpen)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
