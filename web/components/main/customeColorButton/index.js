import React from "react";
import Button from "@material-ui/core/Button";

export default function CustomeColorButton(props) {
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "#ec7211",
        borderColor: "#e76d0c #e15500 #e15500",
        backgroundImage: "linear-gradient(180deg,#f67c1b 0,#e15500)",
        color: "#fff",
        width: "100%",
        minHeight: "2px",
      }}
    >
      {props.title}
    </Button>
  );
}
