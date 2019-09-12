import React from "react";
import Container from "@material-ui/core/Container";

// css
import "./Wrapper.css";
import { Link } from "react-router-dom";

export default class NotFound extends React.Component {
  render() {
    return (
      <Container maxWidth="lg" className="wrapper">
        <h1>Tutorialinaja Site Error - Page Not Found</h1>
        We were unable to find that page. Please go to the home page by clicking
        the link below.
        <h3>
          <Link to="/">Home Page</Link>
        </h3>
      </Container>
    );
  }
}
