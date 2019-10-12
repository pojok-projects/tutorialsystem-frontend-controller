import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Avatar from "@material-ui/core/Avatar";
import Comment from '../comment/Comment'
import "./video-playlist.css";

import { Link } from "react-router-dom";

export class VideoPlaylist extends Component {
  
  render() {
    return (
      <Container maxWidth="lg" className="wrapper">
        <Card style={{ borderRadius: "25px" }}>
          <CardContent>
            <Col xs={12}>
              <Row>
                <Col md={8} xs={12} className="watch-video pt-3">
                  <video src="/assets/sample.mp4" controls></video>
                </Col>
                <ListVideo />
              </Row>
            </Col>
            {/* <br />
            <Col md={8} xs={12}>
              <Comment />
            </Col> */}
          </CardContent>
        </Card>
      </Container>
    );
  }
}

class ListVideo extends Component {
  render() {
    return (
      <Col md={4} xs={12} className="pt-3">
        <Row>
          <Col xs={12}>
            <h5>
              <b>Lorem ipsum dolor sit amet consectetur.</b>
            </h5>
            <br />
          </Col>
          <UserUpload />
          <Col
            xs={12}
            style={{ padding: "0", maxHeight: "270px", overflowY: "scroll" }}
          >
            <Col xs={12}>
              {[0, 1, 2, 3, 4, 5].map(value => (
                <Alert key={value} variant="secondary" className="grid-video">
                  <span className="text-secondary">
                    <Link to="/view" className="video-gallery-title">
                      Lorem, ipsum dolor. {value}
                    </Link>
                  </span>
                </Alert>
              ))}
            </Col>
          </Col>
        </Row>
      </Col>
    );
  }
}

function UserUpload() {
  return (
    <Col xs={12}>
      <Row>
        <Col xs={2}>
          <Avatar alt="Remy Sharp" src="/assets/user-avatar.jpg" />
        </Col>
        <Col xs={10}>
          <p>Lorem ipsum dolor sit.</p>
        </Col>
      </Row>
      <br />
    </Col>
  );
}

export default VideoPlaylist;
