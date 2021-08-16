import React from "react";
import ReactPlayer from "react-player";

export default function Player(props) {
  return (
    <ReactPlayer
      url={props.url}
      width={"100%"}
      height={"100%"}
      controls={true}
      playing={false}
    />
  );
}
