import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#333",
    padding: "0 10%",
    display: "flex",
    alignItems: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.header}>
      <Grid item>
        <h4>
          <a href="#" style={{ textDecoration: "none" }}>
            Xiaq
          </a>
        </h4>
      </Grid>
      <Grid item>
        <Grid container spacing={3}>
          <Grid item>
            <a href="#" style={{ textDecoration: "none" }}>
              Overview
            </a>
          </Grid>
          <Grid item>
            <a href="#" style={{ textDecoration: "none" }}>
              League
            </a>
          </Grid>
          <Grid item>
            <a href="#" style={{ textDecoration: "none" }}>
              Enterprise Events
            </a>
          </Grid>
          <Grid item>
            <a href="#" style={{ textDecoration: "none" }}>
              Racing Tips
            </a>
          </Grid>
          <Grid item>
            <a href="#" style={{ textDecoration: "none" }}>
              Getting Started
            </a>
          </Grid>
          <Grid item>
            <a href="#" style={{ textDecoration: "none" }}>
              Pricing
            </a>
          </Grid>
          <Grid item>
            <a href="#" style={{ textDecoration: "none" }}>
              FAQs
            </a>
          </Grid>
          <Grid item>
            <a href="#" style={{ textDecoration: "none" }}>
              Robotics Projects
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
