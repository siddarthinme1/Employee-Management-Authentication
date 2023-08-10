import { makeStyles } from "@mui/styles";
import { Paper, Card, Typography } from "@mui/material";
import React from "react";

const useStyles = makeStyles(() => ({
  pageHeader: {
    padding: "32px",
    display: "flex",
  },
  pageIcon: {
    display: "inline-block",
    padding: "16px",
  },
  pageTitle: {
    paddingLeft: "32px",
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

function PageHeader(props) {
  const { title, subTitle, icon } = props;
  const classes = useStyles();
  return (
    <Paper elevation={0} square>
      <div className={classes.pageHeader}>
        <Card data-testid="icon" className={classes.pageIcon}>
          {icon}
        </Card>
        <Card elevation={0} className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </Card>
      </div>
    </Paper>
  );
}

export default PageHeader;
