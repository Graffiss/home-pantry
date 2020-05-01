import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addItem as addItemAction, editItem as editItemAction } from '../../actions';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
`;

class Form extends Component {
  state = {
    item: {
      name: '',
      amount: 0,
      minAmount: 0,
      category: '',
    },
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
    const { addItem } = this.props;
    const { item } = this.state;

    addItem(item);
  };

  render() {
    const {
      item: { name, amount, minAmount, category },
    } = this.props;
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
        />
        <FormControl variant="outlined" margin="normal">
          <InputLabel id="demo-simple-select-outlined-label">Kategoria</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Kategoria"
            name="category"
            value={category}
            onChange={this.handleChange}
          >
            <MenuItem value="Napoje">Napoje</MenuItem>
            <MenuItem value="Warzywa">Warzywa</MenuItem>
            <MenuItem value="Owoce">Owoce</MenuItem>
            <MenuItem value="Suche">Suche</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" autoFocus color="primary" variant="contained">
          Dodaj
        </Button>
      </StyledForm>
    );
  }
}

const mapStateToProps = ({ item }) => ({ item });

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemContent) => dispatch(addItemAction(itemContent)),
  editItem: (itemContent) => dispatch(editItemAction(itemContent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
