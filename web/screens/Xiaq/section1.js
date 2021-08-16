import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CustomeColorButton from "../../components/main/customeColorButton";
import CustomeSimpleButton from "../../components/main/customeSimpleButton";

const useStyles = makeStyles((theme) => ({
  section_1: {
    color: "#fff",
    backgroundColor: "#161e2d",
    padding: "30px 10%",
  },
}));

export default function Section_1() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.section_1}>
      <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
        <h1>Developers, start your engines</h1>
        <p>
          Developers of all skill levels can get hands on with machine learning
          through a cloud based 3D racing simulator, fully autonomous 1/18th
          scale race car driven by reinforcement learning, and global racing
          league.
        </p>
        <Grid container style={{ display: "flex" }}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ padding: "10px" }}
          >
            <CustomeColorButton
              title="Build a model"
              style={{ padding: "0 10px" }}
            />
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ padding: "10px" }}
          >
            <CustomeSimpleButton title="Buy Now" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
        <img src="../../sources/Pic/img_1.png" style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
}
