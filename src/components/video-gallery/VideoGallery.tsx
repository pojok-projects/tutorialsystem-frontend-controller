import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import "../video-gallery/video-gallery.css";
import video from "../../sample/videos/sample.mp4";
import { Link } from "react-router-dom";
import Recomended from "../recomended/Recomended";

export default class VideoGallery extends React.Component {
  render() {
    return (
      <Container maxWidth="lg" className="wrapper">
        <Grid container spacing={10}>
          <Grid item lg={8}>
            <Card>
              <Typography variant="h6" style={{ padding: " 10px 16px" }}>
                Selamat datang ke Tutorialin Aja!
              </Typography>
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value, idx) => (
                    <Grid
                      key={idx}
                      item
                      sm={6}
                      md={4}
                      className="video-gallery"
                    >
                      <video src={video} controls></video>
                      <Typography variant="h6" gutterBottom>
                        <Link
                          to="/video-playlist"
                          className="video-gallery-title"
                        >
                          Lorem ipsum
                        </Link>
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Recomended />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
