import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "#eaeded",
    backgroundColor: "#242F3E",
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.footer}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        FOOTER
      </Grid>
    </Grid>
  );
}
