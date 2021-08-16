import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import image from "../../sources/Pic/back_1.png";

const useStyles = makeStyles((theme) => ({
  section_3: {
    color: "#fff",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    padding: "30px 10%",
  },
}));

export default function Section_3() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.section_3}>
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        sm={4}
        xs={12}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img src="../../sources/Pic/img_2.png" style={{ width: "60%" }} />
        <h3>Simulator</h3>
        Build models in Amazon SageMaker and train, test, and iterate quickly
        and easily on the track in the AWS DeepRacer 3D racing simulator.
        <br />
        <a style={{ color: "#fff" }} href="#">
          Learn more »
        </a>
      </Grid>
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        sm={4}
        xs={12}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img src="../../sources/Pic/img_3.png" style={{ width: "60%" }} />
        <h3>Car</h3>
        Experience the thrill of the race in the real-world when you deploy your
        reinforcement learning model onto AWS DeepRacer.
        <br />
        <a style={{ color: "#fff" }} href="#">
          Learn more »
        </a>
      </Grid>
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        sm={4}
        xs={12}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img src="../../sources/Pic/img_4.png" style={{ width: "60%" }} />
        <h3>League</h3>
        Compete in the world’s first global, autonomous racing league, to race
        for prizes and glory and a chance to advance to the Championship Cup.
        <br />
        <a style={{ color: "#fff" }} href="#">
          Learn more »
        </a>
      </Grid>
    </Grid>
  );
}
