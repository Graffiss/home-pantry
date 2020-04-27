import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import SvgIcon from '@material-ui/core/SvgIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from '../../actions';

const StyledListItem = styled(ListItem)`
  min-width: 40vw;
`;

const StyledSvgIcon = styled(SvgIcon)`
  max-width: 24px;
  max-height: 24px;
`;

const ProductItem = ({ id, name, category, amount, icon, removeItem }) => (
  <StyledListItem>
    <ListItemAvatar>
      <StyledSvgIcon>{icon}</StyledSvgIcon>
    </ListItemAvatar>
    <ListItemText primary={name} />
    {`Pozostało: ${amount}`}
    <Chip label={category} size="small" />
    <IconButton edge="end" aria-label="edit">
      <EditIcon />
    </IconButton>
    <IconButton edge="end" aria-label="delete" onClick={() => removeItem(id)}>
      <DeleteIcon />
    </IconButton>
  </StyledListItem>
);

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
