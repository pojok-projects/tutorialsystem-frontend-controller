import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import thumbnail from "../../images/recomended-thumbnail.jpg";
import '../recomended/Recomended.css'
import '../video-gallery/video-gallery.css'
import video from '../../sample/videos/sample.mp4'

export default class VideoGllery extends React.Component {
  render() {
    return (
      <Container maxWidth="lg" className="wrapper">
        <Grid container spacing={10}>
          <Grid item lg={8}>
            <Card>
              <Typography variant="h6" style={{ padding: " 10px 16px" }} >
                Playlist : Menjadi Fullstack web developer dalam 2 minggu
                </Typography>
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  {[0,1,2,3,4,5,6,7,8].map(value =>
                   <Grid item lg={4} className="video-gallery">
                     <video src={video} controls></video>
                     <Typography variant="h6" gutterBottom>
                       Lorem ipsum
                     </Typography>
                   </Grid>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card>
              <Typography variant="h6" style={{ padding: " 10px 16px" }} >
                Recomended
                </Typography>
              <Divider />
              <CardContent>
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>)
  }
}