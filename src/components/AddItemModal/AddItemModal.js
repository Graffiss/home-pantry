import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { toggleModal as toggleModalAction } from '../../actions';
import Form from '../Form/Form';

const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const AddItemModal = ({ toggleModal, modalOpen, editMode }) => (
  /* state = {
    modalOpen: true,
  };

  handleModalOpen = () => {
    this.setState({
      modalOpen: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      modalOpen: false,
    });
  };
*/
  <div>
    <Tooltip title="Dodaj" aria-label="add">
      <StyledFab color="primary" aria-label="add" onClick={() => toggleModal(modalOpen)}>
        <AddIcon />
      </StyledFab>
    </Tooltip>
    <Dialog
      onClose={() => toggleModal(modalOpen)}
      aria-labelledby="customized-dialog-title"
      open={modalOpen}
    >
      <DialogTitle id="customized-dialog-title" onClose={() => toggleModal(modalOpen)}>
        {editMode ? 'Edytuj produkt' : 'Dodaj produkt'}
      </DialogTitle>
      <DialogContent dividers>
        <Form />
      </DialogContent>
    </Dialog>
  </div>
);

const mapStateToProps = ({ modalOpen, editMode }) => ({ modalOpen, editMode });

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (modalOpen) => dispatch(toggleModalAction(modalOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemModal);
