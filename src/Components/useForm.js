import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: "8px",
    },
  },
}));

function useForm(initialFieldValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    resetForm,
    handleInputChange,
  };
}

function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}

export { useForm, Form };
