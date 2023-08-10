import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "250px",
    height: "100%",
    backgroundColor: "#29394d",
    margin: "auto",
  },
});

function SideMenu() {
  const classes = useStyles();
  return <div className={classes.sideMenu}></div>;
}

export default SideMenu;
