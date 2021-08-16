import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CustomeColorButton from "../../components/main/customeColorButton";
import image from "../../sources/Pic/back_6.jpg";

const useStyles = makeStyles((theme) => ({
  section_8: {
    color: "#fff",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    padding: "30px 10%",
  },
}));

export default function Section_8() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.section_8}>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <h3>More hands-on learning</h3>
        <p>
          Explore the portfolio of educational devices designed for developers
          of all skill levels to learn ML in fun, practical ways. Get started
          with reinforcement learning with AWS DeepRacer, learn how to build
          deep learning-based computer vision apps with AWS DeepLens, and
          express your creativity through generative AI with AWS DeepComposer.
        </p>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <img src="../../sources/Pic/img_17.png" style={{ width: "80%" }} />
        <h3>
          Get rolling with AWS DeepRacer in a free 90 minute e-learning course.
        </h3>
        <Grid container style={{ display: "flex" }}>
          <Grid
            item
            xl={7}
            lg={7}
            md={7}
            sm={12}
            xs={12}
            style={{ padding: "10px" }}
          >
            <CustomeColorButton
              title=" Take the e-learning course"
              style={{ padding: "0 10px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
