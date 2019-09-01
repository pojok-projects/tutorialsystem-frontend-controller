import React from 'react';
import Grid from '@material-ui/core/Grid'

//assets
import thumbnail from "../../images/recomended-thumbnail.jpg";

// css
import './Recomended.css'
export default class Recomended extends React.Component {
  render() {
    return (
      <div>
        <h4>Recomended</h4>
        <Grid container>
          <Grid item lg={12}>
            <div className="wrapper-recomended">
              <Grid container spacing={3} className="recomended-video">
                <Grid item lg={5}>
                  <img src={thumbnail} alt={thumbnail} width="100%" />
                </Grid>
                <Grid item lg={7}>
                  <div className="recomended-desc">
                    <h6>Beautyfull Florest</h6>
                    <p>Jungle Warior</p>
                    <span><i>400.000x views</i></span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item lg={12}>
            <div className="wrapper-recomended">
              <Grid container spacing={3} className="recomended-video">
                <Grid item lg={5}>
                  <img src={thumbnail} alt={thumbnail} width="100%" />
                </Grid>
                <Grid item lg={7}>
                  <div className="recomended-desc">
                    <h6>Beautyfull Florest</h6>
                    <p>Jungle Warior</p>
                    <span><i>400.000x views</i></span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item lg={12}>
            <div className="wrapper-recomended">
              <Grid container spacing={3} className="recomended-video">
                <Grid item lg={5}>
                  <img src={thumbnail} alt={thumbnail} width="100%" />
                </Grid>
                <Grid item lg={7}>
                  <div className="recomended-desc">
                    <h6>Beautyfull Florest</h6>
                    <p>Jungle Warior</p>
                    <span><i>400.000x views</i></span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}