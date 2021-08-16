import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Player from "../../components/main/player";

const useStyles = makeStyles((theme) => ({
  section_2: {
    color: "#fff",
    backgroundColor: "#161e2d",
    padding: "30px 10%",
  },
}));

export default function Section_2() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.section_2}>
      <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
        <Player url="../../sources/Video/mov_1.mp4" />
      </Grid>
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        sm={12}
        xs={12}
        style={{
          margin: "auto 0",
        }}
      >
        <div
          style={{
            border: "2px #527FFF solid",
            padding: "0 20px",
          }}
        >
          <h2>10 hours free</h2>
          <h3>
            for 30 days with the&nbsp;
            <a href="#" style={{ color: "#007eb9", textDecoration: "none" }}>
              AWS Free Tier
            </a>
          </h3>
          <p>
            <a href="#" style={{ color: "#007eb9", textDecoration: "none" }}>
              Get started for free »
            </a>
          </p>
        </div>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <h2>In pole position to learn reinforcement learning</h2>
        <p>
          AWS DeepRacer gives you an interesting and fun way to get started with
          reinforcement learning (RL). RL is an advanced machine learning (ML)
          technique that takes a very different approach to training models than
          other machine learning methods. Its super power is that it learns very
          complex behaviors without requiring any labeled training data, and can
          make short term decisions while optimizing for a longer term goal.
        </p>
      </Grid>
    </Grid>
  );
}
