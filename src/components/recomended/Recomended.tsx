import React from "react";
import Grid from "@material-ui/core/Grid";


// css
import "./Recomended.css";
import { Link } from "react-router-dom";
export default class Recomended extends React.Component {
  render() {
    return (
      <div style={{ margin: "10px 20px" }}>
        <h4>Recomended</h4>
        <Grid container spacing={3} >
          {[0, 1, 2].map((value, idx) => (
            <Grid item sm={6} md={12} lg={12} key={idx}>
              <div className="wrapper-recomended">
                <Grid container spacing={3} className="recomended-video">
                  <Grid item lg={5}>
                    <Link to="/video-playlist" className="video-gallery-title">
                      <img src="/assets/recomended-thumbnail.jpg" alt="recomended-thumbnail.jpg" width="100%" />
                    </Link>
                  </Grid>
                  <Grid item lg={7}>
                    <div className="recomended-desc">
                      <Link
                        to="/video-playlist"
                        className="video-gallery-title"
                      >
                        <h6>Beautyfull Florest</h6>
                      </Link>
                      <p>Jungle Warior</p>
                      <span>
                        <i>400.000x views</i>
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
