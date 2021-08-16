import React from "react";
import Button from "@material-ui/core/Button";

export default function customeSimpleButton(props) {
  return (
    <Button
      variant="contained"
      style={{
        color: "#333",
        width: "100%",
        minHeight: "2px",
      }}
    >
      {props.title}
    </Button>
  );
}
