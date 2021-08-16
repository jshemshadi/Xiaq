import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CustomeColorButton from "../../components/main/customeColorButton";
import CustomeSimpleButton from "../../components/main/customeSimpleButton";
import image from "../../sources/Pic/back_4.png";

const useStyles = makeStyles((theme) => ({
  section_6: {
    color: "#fff",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    padding: "30px 10%",
  },
}));

export default function Section_6() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.section_6}>
      <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
        <img src="../../sources/Pic/img_10.png" style={{ width: "60%" }} />
      </Grid>
      <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
        <h3>The rubber meets the road</h3>
        <p>
          AWS DeepRacer is an autonomous 1/18th scale race car designed to test
          RL models by racing on a physical track. Using cameras to view the
          track and a reinforcement model to control throttle and steering, the
          car shows how a model trained in a simulated environment can be
          transferred to the real-world.
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
              title="Buy Deep Racer"
              style={{ padding: "0 10px" }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
        <h3>Introducing the AWS DeepRacer Evo</h3>
        <p>
          AWS DeepRacer Evo is the next generation in autonomous racing. It
          comes fully equipped with stereo cameras and LiDAR sensor to enable
          object avoidance and head-to-head racing, giving developers everything
          they need to take their racing to the next level. In object avoidance
          races, developers use the sensors to detect and avoid obstacles placed
          on the track. In head-to-head, developers race against another
          DeepRacer on the same track and try to avoid it while still turning in
          the best lap time. Forward facing left and right cameras make up the
          stereo cameras, which helps the car learn depth information in images.
          This information can then be used to sense and avoid objects being
          approached on the track. The LiDAR sensor is backward facing and
          detects objects behind and beside the car.
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
              title="Buy Deep Racer Evo"
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
            <CustomeSimpleButton title="Look under the hood" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
        <img src="../../sources/Pic/img_11.png" style={{ width: "60%" }} />
      </Grid>

      <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
        <img src="../../sources/Pic/img_12.png" style={{ width: "60%" }} />
      </Grid>
      <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
        <h3>Already own an AWS DeepRacer?</h3>
        <p>
          Developers who already own a DeepRacer can upgrade their cars to have
          the same capabilities as Evo with the AWS DeepRacer Sensor Kit.
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
              title="Buy sensor kit"
              style={{ padding: "0 10px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
