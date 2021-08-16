import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#333",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.header}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        HEADER
      </Grid>
    </Grid>
  );
}
