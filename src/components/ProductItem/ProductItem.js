import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';

const StyledListItem = styled(ListItem)`
  min-width: 20vw;
`;

const ProductItem = ({ name, category }) => (
  <StyledListItem>
    <ListItemAvatar>
      <Avatar>
        <FolderIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={name} />
    <Chip label={category} size="small" />
    <IconButton edge="end" aria-label="edit">
      <EditIcon />
    </IconButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  </StyledListItem>
);

export default ProductItem;
