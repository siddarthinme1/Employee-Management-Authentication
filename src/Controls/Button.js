import { Button as MuiButton } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    margin: "4px",
  },
}));

function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root }}
    >
      {text}
    </MuiButton>
  );
}

export default Button;
