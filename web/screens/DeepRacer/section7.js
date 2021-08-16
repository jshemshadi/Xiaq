import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import image from "../../sources/Pic/back_5.png";

const useStyles = makeStyles((theme) => ({
  section_7: {
    color: "#fff",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    padding: "30px 10%",
  },
}));

export default function Section_7() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.section_7}>
      <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
        <h3>Under the hood</h3>
        <p>
          The AWS DeepRacer Evo car includes the original AWS DeepRacer car, an
          additional 4 megapixel camera module that forms stereo vision with the
          original one, a scanning LiDAR, a shell that can fit both the stereo
          camera and LiDAR, and a few accessories and easy-to-use tools for a
          quick installation.
        </p>
        <table>
          <tr>
            <td>CAR</td>
            <td>18th scale 4WD with monster truck chassis</td>
          </tr>
          <tr>
            <td>CPU</td>
            <td>Intel Atom™ Processor </td>
          </tr>
          <tr>
            <td>MEMORY</td>
            <td>4GB RAM </td>
          </tr>
          <tr>
            <td>STORAGE</td>
            <td>32GB (expandable)</td>
          </tr>
          <tr>
            <td>WI-FI</td>
            <td>802.11ac</td>
          </tr>
          <tr>
            <td>CAMERA</td>
            <td> Stereo 4 MP cameras with MJPEG</td>
          </tr>
          <tr>
            <td>LIDAR Sensor</td>
            <td>360 Degree 12 Meters Scanning Radius LIDAR Sensor</td>
          </tr>
          <tr>
            <td>SOFTWARE</td>
            <td>
              Ubuntu OS 16.04.3 LTS, Intel® OpenVINO™ toolkit, ROS Kinetic
            </td>
          </tr>
          <tr>
            <td>DRIVE BATTERY</td>
            <td>7.4V/1100mAh lithium polymer</td>
          </tr>
          <tr>
            <td>COMPUTE BATTERY</td>
            <td>13600mAh USB-C PD</td>
          </tr>
          <tr>
            <td>PORTS</td>
            <td>4x USB-A, 1x USB-C, 1x Micro-USB, 1x HDMI</td>
          </tr>
          <tr>
            <td>SENSORS</td>
            <td>Integrated accelerometer and gyroscope</td>
          </tr>
        </table>
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
        <img src="../../sources/Pic/img_13.gif" style={{ width: "90%" }} />
      </Grid>{" "}
    </Grid>
  );
}
