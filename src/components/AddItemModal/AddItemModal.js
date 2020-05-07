import React from 'react';
import PropTypes from 'prop-types';
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
import { toggleModal as toggleModalAction, stopEdit as stopEditAction } from '../../actions';
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

const AddItemModal = ({ toggleModal, stopEdit, modalOpen, editMode }) => {
  const handleModalClose = () => {
    toggleModal(modalOpen);
    stopEdit();
  };
  return (
    <div>
      <Tooltip title="Dodaj" aria-label="add">
        <StyledFab color="primary" aria-label="add" onClick={() => handleModalClose()}>
          <AddIcon />
        </StyledFab>
      </Tooltip>
      <Dialog
        onClose={() => handleModalClose()}
        aria-labelledby="customized-dialog-title"
        open={modalOpen}
      >
        <DialogTitle id="customized-dialog-title" onClose={() => handleModalClose()}>
          {editMode ? 'Edytuj produkt' : 'Dodaj produkt'}
        </DialogTitle>
        <DialogContent dividers>
          <Form />
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapStateToProps = ({ modalOpen, editMode }) => ({ modalOpen, editMode });

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (modalOpen) => dispatch(toggleModalAction(modalOpen)),
  stopEdit: () => dispatch(stopEditAction()),
});

AddItemModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  stopEdit: PropTypes.func,
  editMode: PropTypes.bool,
  modalOpen: PropTypes.bool,
};

AddItemModal.defaultProps = {
  stopEdit: true,
  editMode: false,
  modalOpen: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemModal);
