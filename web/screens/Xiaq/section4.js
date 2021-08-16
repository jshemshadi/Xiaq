import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CustomeColorButton from "../../components/main/customeColorButton";
import CustomeSimpleButton from "../../components/main/customeSimpleButton";
import image from "../../sources/Pic/back_2.jpg";

const useStyles = makeStyles((theme) => ({
  section_4: {
    color: "#fff",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    padding: "30px 10%",
  },
}));

export default function Section_4() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.section_4}>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        Get rolling with machine learning
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
              title="Start Racing"
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
            <CustomeSimpleButton title="Learn More" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
          <h3>A fun way to learn machine learning</h3>
          <p>
            Get started with machine learning quickly with hands-on tutorials
            that help you learn the basics of machine learning, start training
            reinforcement learning models and test them in an exciting,
            autonomous car racing experience.
          </p>
          <a style={{ color: "#fff" }} href="#">
            Take the E-Learning Course »
          </a>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
          <h3>Experiment and grow</h3>
          <p>
            Test these new found skills in the Xiaq 3D racing
            simulator. Experiment with multiple sensor inputs, the latest
            reinforcement learning algorithms, neural network configurations and
            simulation to-real domain transfer methods.
          </p>
          <a style={{ color: "#fff" }} href="#">
            Start Racing »
          </a>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
          <h3>Community and competition</h3>
          <p>
            The Xiaq League provides an opportunity for you to compete
            for prizes and meet fellow machine learning enthusiasts, online and
            in person. Share ideas and insights on how to succeed and create
            your own private virtual race.
          </p>
          <a style={{ color: "#fff" }} href="#">
            Learn more »
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
