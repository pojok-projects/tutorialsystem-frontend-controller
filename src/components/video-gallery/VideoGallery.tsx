import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MorevertIcon from "@material-ui/icons/MoreVert";
import "../video-gallery/video-gallery.css";
import { Link } from "react-router-dom";
import Recomended from "../recomended/Recomended";
import PopupWelcome from "../popup-welcome/PopupWelcome";
import AboutUs from "../about-us/AboutUs";
import {PlayListController} from "../../controllers/playlist-controller";

export default class VideoGallery extends React.Component {
  
  state = {
    isCloseAbout : false,
    data:[],
    loading:false
  }

  closeAboutUs = () => {
    this.setState({ isCloseAbout : true })
  }

  async componentDidMount(){
    await PlayListController()
    .then(({result}:any) => {
        this.setState({
          data:result,
          loading:false
        })
    })
  }

  render() {
    const {loading,data} = this.state
    console.log(data)
    
    if(loading){
      return(<p>loading....</p>)
    }
    return (
      <Container maxWidth="lg" className="wrapper">
      <PopupWelcome />
        <Grid container alignItems="flex-start" justify="center">
          <Grid item lg={8}>
            {this.state.isCloseAbout ? "" : <AboutUs onClose={this.closeAboutUs}/> }
            <Grid container spacing={3}>
              {data.map((value:any) => (
                <Grid key={value.id} item xs={12} sm={6} md={4}>
                  <Grid container direction="column" className="video-gallery">
                    <Grid item xs className="video-gallery-thumbnail">
                      <img src="/assets/recomended-thumbnail.jpg"  alt="recomended-thumbnail.jpg"  />
                      <span className="video-gallery-duration">05:30s</span>
                    </Grid>
                    <Grid item xs>
                    <Grid container alignItems="flex-start" justify="flex-start">
                    <IconButton>
                      <img src="/assets/icon-user.png" className="video-gallery-user" alt="icon-user.png" />
                      </IconButton>
                      <Grid item xs>
                        <Grid container direction="column" className="video-gallery-title">
                          <Typography variant="subtitle2" >
                              <Link to={"/video-playlist/" +'id/'+ value.id}>
                                {value.description}
                              </Link>
                          </Typography>
                          <Typography variant="caption" >{value.title}</Typography>
                        </Grid>
                      </Grid>
                      <IconButton>
                        <MorevertIcon />
                       </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <Recomended />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
