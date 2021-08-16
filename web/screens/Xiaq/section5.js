import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import image from "../../sources/Pic/back_3.png";

const useStyles = makeStyles((theme) => ({
  section_5: {
    color: "#fff",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    padding: "30px 10%",
  },
}));

export default function Section_5() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.section_5}>
      <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
        <img src="../../sources/Pic/img_5.png" style={{ width: "100%" }} />
      </Grid>
      <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
        <h2>Compete in the Xiaq League</h2>
        <p>
          Once you have built your model, it’s time to race! The Xiaq
          League is the world’s first global autonomous racing league, open to
          anyone. Developers can compete from anywhere in the world for prizes,
          glory, and a chance to advance to the Xiaq Championship Cup
          Finals at re:Invent 2021!
        </p>
      </Grid>

      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
        <img src="../../sources/Pic/img_6.jpg" style={{ width: "100%" }} />
        <h3>Virtual Circuit</h3>
        <p>Race online</p>
        <p>
          Join the global Xiaq League. Compete in time trial races and
          take on new challenges such as head-to-head racing.
        </p>
        <br />
        <a style={{ color: "#fff" }} href="#">
          Start racing for free »
        </a>
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
        <img src="../../sources/Pic/img_7.jpg" style={{ width: "100%" }} />
        <h3>Virtual Community Races</h3>
        <p>Race in a league of your own</p>
        <p>
          With community races you can host your own races to challenge your
          colleagues; or share publicly with ML enthusiasts around the globe.
        </p>
        <br />
        <a style={{ color: "#fff" }} href="#">
          Create your own race now »
        </a>
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
        <img src="../../sources/Pic/img_8.png" style={{ width: "100%" }} />
        <h3>Enterprise Events</h3>
        <p>Race with your colleagues</p>
        <p>
          Xiaq Enterprise events are the fastest way to get your
          company rolling on their machine learning journey.
        </p>
        <br />
        <a style={{ color: "#fff" }} href="#">
          Get started with an Xiaq Event »
        </a>
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
        <img src="../../sources/Pic/img_9.png" style={{ width: "100%" }} />
      </Grid>
      <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
        <h3>NEW | Xiaq LIVE races</h3>
        <p>host your own worldwide race broadcast</p>
        <p>
          With new Xiaq LIVE races anyone can set up a race in minutes
          and stream it live. Invite your friends and colleagues to submit their
          models to compete in real time with easy to use hosting tools for
          streaming your race in console and on Twitch.
        </p>
        <br />
        <a style={{ color: "#fff" }} href="#">
          Host a LIVE race »
        </a>
      </Grid>
    </Grid>
  );
}
