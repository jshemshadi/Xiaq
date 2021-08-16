import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  section_9: {
    color: "#333",
    padding: "30px 10%",
  },
}));

export default function Section_9() {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.section_9}>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        style={{ border: "1px solid #d5dbdb", display: "flex" }}
      >
        <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
          <p>GET STARTED WITH AWS</p>
          <p>Learn how to start using AWS in minutes</p>
        </Grid>
        <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
          <img src="../../sources/Pic/img_14.png" style={{ width: "80%" }} />
        </Grid>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        style={{ border: "1px solid #d5dbdb", display: "flex" }}
      >
        <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
          <p>AWS FREE TIER</p>
          <p>Gain free, hands-on experience with AWS for 12 months</p>
        </Grid>
        <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
          <img src="../../sources/Pic/img_15.png" style={{ width: "80%" }} />
        </Grid>
      </Grid>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ border: "1px solid #d5dbdb", display: "flex" }}
      >
        <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
          <p>FREE AWS TRAINING</p>
          <p>
            Access 500+ free digital courses across roles, skill levels, and
            domains to build your AWS Cloud skills
          </p>
        </Grid>
        <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
          <img src="../../sources/Pic/img_16.png" style={{ width: "80%" }} />
        </Grid>
      </Grid>
    </Grid>
  );
}
