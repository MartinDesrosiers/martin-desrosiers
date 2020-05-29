import { container, title } from "../../material-kit-react.js";
import 'typeface-roboto';

import imagesStyle from "../imagesStyles.js";
import { Hidden } from "@material-ui/core";

const profilePageStyle = {
  container: {
    ...container,
  },
  app: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    background: "#e7e5ea",
  },
  brand: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    fontSize: "1.313rem",
    margin: "10px 0 0"
  },
  titleAbout: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    textAlign: "center",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  main: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    background: "white",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    margin: "-60px 30px 0px",
    borderRadius: "3px",
    boxShadow: "0 20px 20px rgba(44, 82, 100, 0.4)",
  },
  link: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    textDecoration: "none"
  },
  textCenter: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    textAlign: "center"
  },
  profile: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    textAlign: "center",
    marginBottom: "-75px",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    marginTop: "-80px"
  },
  ...imagesStyle,
  socials: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    fontFamily: '"Roboto", "Times New Roman", "Arial", sans-serif',
    margin: "20px auto 50px auto",
    textAlign: "center",
  }
};

export default profilePageStyle;
