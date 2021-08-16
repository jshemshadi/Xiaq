import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "#eaeded",
    backgroundColor: "#242F3E",
    padding: "0 5%",
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.footer}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <a
          href="#"
          style={{
            color: "#eaeded",
            textDecoration: "none",
          }}
        >
          Privacy
        </a>
        &nbsp; |&nbsp;
        <a
          href="#"
          style={{
            color: "#eaeded",
            textDecoration: "none",
          }}
        >
          Site Terms
        </a>
        &nbsp; |&nbsp;
        <a
          href="#"
          style={{
            color: "#eaeded",
            textDecoration: "none",
          }}
        >
          Cookie Preferences
        </a>
        &nbsp; | © 2021, Xiaq, Inc. or its affiliates. All rights reserved.
      </Grid>
    </Grid>
  );
}
