import { TextField } from "@mui/material";
import React from "react";

function Input(props) {
  const { label, name, value, error = null, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default Input;
