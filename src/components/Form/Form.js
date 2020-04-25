import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Form extends Component {
  render() {
    return (
      <StyledForm>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </StyledForm>
    );
  }
}

export default Form;
