import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./header";
import Footer from "./footer";
import Section_1 from "./section1";
import Section_2 from "./section2";
import Section_3 from "./section3";
import Section_4 from "./section4";
import Section_5 from "./section5";
import Section_6 from "./section6";
import Section_7 from "./section7";
import Section_8 from "./section8";
import Section_9 from "./section9";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Xiaq() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Section_8 />
      <Section_9 />
      <Footer />
    </div>
  );
}
