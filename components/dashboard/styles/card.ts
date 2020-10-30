import { Theme } from "@material-ui/core";
import { Styles } from "@material-ui/core/styles/withStyles";
import {
    blackColor,
    whiteColor,
    hexToRgb
  } from "./globalstyles";
  
  const cardStyle: Styles<Theme, {}, string> = {
    card: {
      border: "0",
      marginBottom: "30px",
      marginTop: "30px",
      borderRadius: "6px",
      color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
      background: whiteColor,
      width: "100%",
      boxShadow: "0 2px 4px 1px rgba(" + hexToRgb(blackColor) + ", 0.2)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minWidth: "0",
      wordWrap: "break-word",
      fontSize: ".875rem"
    },
    cardPlain: {
      background: "transparent",
      boxShadow: "none"
    },
    cardProfile: {
      marginTop: "30px",
      textAlign: "center"
    },
    cardChart: {
      "& p": {
        marginTop: "0px",
        paddingTop: "0px"
      }
    }
  };
  
  export default cardStyle;
  