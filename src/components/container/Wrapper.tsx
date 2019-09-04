import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// components
import Video from '../video/Video';
import Recomended from '../recomended/Recomended';

// css
import './Wrapper.css'

export default class Wrapper extends React.Component {
  render() {
    return (
      <Container maxWidth="lg" className="wrapper">
        <Grid container spacing={10}>
          <Grid item lg={8}>
            <Video />
          </Grid>
          <Grid item lg={4}>
            <Recomended />
          </Grid>
        </Grid>
      </Container>
    )
  }
}