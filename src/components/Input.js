import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ errorMessage, ...props }) => (
  <div className='input-text'>
    <TextField {...props} />
    {errorMessage && <span className='errorMessage'>{errorMessage}</span>}
  </div>
);

export default Input;
