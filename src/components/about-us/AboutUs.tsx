import React, { Component } from 'react'
import { Grid, Paper, Collapse, Slide, IconButton   } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import "./AboutUs.css";

const Slide1 = () => {
    const [display, setDisplay] = React.useState(false);
    
    setTimeout(
        () => setDisplay(true),
        300
    );

    return (
        <Collapse in={display}>
            <Paper className="about-us-slide">
                ok ok slide1
            </Paper>
        </Collapse>
    )
}

const Slide2 = () => {
    const [display, setDisplay] = React.useState(false);
    
    setTimeout(
        () => setDisplay(true),
        300
    );

    return (
        <Slide direction="right" in={display}>
            <Paper className="about-us-slide">
                ok ok slide2
            </Paper>
        </Slide>
    )
}

const Slide3 = () => {
    const [display, setDisplay] = React.useState(false);
    
    setTimeout(
        () => setDisplay(true),
        300
    );

    return (
        <Slide direction="right" in={display}>
            <Paper className="about-us-slide">
                ok ok slide3
            </Paper>
        </Slide>
    )
}

type AboutUsProps = {
    onClose : () => void;
}

export default class AboutUs extends Component<AboutUsProps>{
    state = {
        slides : [<Slide1 /> , <Slide2 />, <Slide3 /> ],
        countSlide : 0,
    }

    componentDidMount(){
        setInterval( 
            () => this.updateSlide(),
            3000
        );
    }

    updateSlide() {
        let { slides, countSlide } = this.state;
        countSlide += 1;

        if(countSlide > (slides.length-1)){
            this.setState({ countSlide:  0 });
        }else{
            
            this.setState({ countSlide: countSlide });
        }
    }

  render() {
    const { countSlide, slides } = this.state

    return (
      <Grid container direction="column" className="about-us">
          {slides[countSlide]}
        <IconButton className="about-us-close" >
            <CloseIcon  onClick={this.props.onClose}/>
        </IconButton>
      </Grid>
    )
  }
}
