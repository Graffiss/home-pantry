import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {
  addItem as addItemAction,
  updateItem as updateItemAction,
  toggleModal as toggleModalAction,
} from '../../actions';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 250px;
  }
`;

class Form extends Component {
  state = {
    item: {
      id: '',
      name: '',
      amount: 1,
      minAmount: 0,
      unit: '',
      category: '',
      icon: '',
    },
  };

  componentDidMount = () => {
    const {
      editMode,
      item: { id, name, amount, minAmount, unit, category, icon },
    } = this.props;

    if (editMode) {
      this.setState({
        item: {
          id,
          name,
          amount,
          minAmount,
          unit,
          category,
          icon,
        },
      });
    }
  };

  handleChange = (e) => {
    const { item } = this.state;
    this.setState({
      item: {
        ...item,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addItem, toggleModal, updateItem, editMode } = this.props;
    const { item } = this.state;

    if (editMode) {
      const {
        item: { id },
      } = this.props;
      updateItem(id, item);
    } else {
      addItem(item);
    }
    toggleModal();
  };

  render() {
    const {
      item: { name, amount, minAmount, unit, category, icon },
    } = this.state;

    const { editMode } = this.props;

    const amountProps = {
      step: 1,
      min: 1,
      max: 1000,
    };

    const minAmountProps = {
      step: 1,
      min: 0,
      max: 1000,
    };

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <TextField
          id="outlined-basic"
          value={name}
          label="Nazwa produktu"
          variant="outlined"
          margin="normal"
          name="name"
          onChange={this.handleChange}
          size="small"
          required
        />
        <TextField
          id="outlined-number"
          label="Ilość"
          type="number"
          name="amount"
          value={amount}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          margin="normal"
          onChange={this.handleChange}
          size="small"
          inputProps={amountProps}
        />
        <TextField
          id="outlined-number"
          label="Minimalna ilość"
          type="number"
          name="minAmount"
          value={minAmount}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          margin="normal"
          onChange={this.handleChange}
          size="small"
          inputProps={minAmountProps}
        />
        <FormControl variant="outlined" margin="normal">
          <InputLabel id="demo-simple-select-outlined-label">Jednostka</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Jednostka"
            name="unit"
            value={unit}
            onChange={this.handleChange}
            size="small"
          >
            <MenuItem value="szt">szt</MenuItem>
            <MenuItem value="l">l</MenuItem>
            <MenuItem value="ml">ml</MenuItem>
            <MenuItem value="kg">kg</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" margin="normal">
          <InputLabel id="demo-simple-select-outlined-label">Kategoria</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Kategoria"
            name="category"
            value={category}
            onChange={this.handleChange}
            size="small"
          >
            <MenuItem value="Napoje">Napoje</MenuItem>
            <MenuItem value="Warzywa">Warzywa</MenuItem>
            <MenuItem value="Owoce">Owoce</MenuItem>
            <MenuItem value="Suche">Suche</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          value={icon}
          label="Link do ikony"
          variant="outlined"
          margin="normal"
          name="icon"
          onChange={this.handleChange}
          size="small"
        />
        <Button
          type="submit"
          autoFocus
          color={editMode ? 'secondary' : 'primary'}
          variant="contained"
        >
          {editMode ? 'Edytuj/Zapisz' : 'Dodaj'}
        </Button>
      </StyledForm>
    );
  }
}

const mapStateToProps = ({ item, editMode }) => ({ item, editMode });

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemContent) => dispatch(addItemAction(itemContent)),
  toggleModal: (modalOpen) => dispatch(toggleModalAction(modalOpen)),
  updateItem: (id, itemContent) => dispatch(updateItemAction(id, itemContent)),
});

Form.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    minAmount: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
