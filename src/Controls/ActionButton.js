import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 0,
    margin: "4px",
  },
}));

function ActionButton(props) {
  const { color, children, onClick } = props;
  const classes = useStyles();
  return (
    <Button className={classes.root} color={color} onClick={onClick}>
      {children}
    </Button>
  );
}

export default ActionButton;
