import React from "react";
import Container from "@material-ui/core/Container";

// css
import "./Wrapper.css";
import { Link } from "react-router-dom";

type ErrorMessageProp = {
  message :string;
}

const MessagePageNotFound = () => {
  return(
    <>
      <h1>Tutorialinaja Site Error - Page Not Found</h1>
        We were unable to find that page. Please go to the home page by clicking
        the link below.
    </>
  )
}

export default class ErrorMessage extends React.Component<ErrorMessageProp> {
  render() {
    const {message} = this.props;

    return (
      <Container maxWidth="lg" className="wrapper">
        {message || <MessagePageNotFound />}
        <h3>
          <Link to="/">Home Page</Link>
        </h3>
      </Container>
    );
  }
}
