import React, { Component } from 'react'
import { Grid, Paper, Collapse, Slide, IconButton   } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import{ Col,Row,Button }  from "react-bootstrap";
import {Link} from 'react-router-dom'
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
                <AboutSlideContent />
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
                <AboutSlideContent />
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
                <AboutSlideContent />
            </Paper>
        </Slide>
    )
}

const AboutSlideContent = () => {
    return(
        <Row className='pl-3 pr-3'>
            <Col xs={4} className='about-content-left'>
                <img src="/assets/logo-tutorialinaja.png" alt="logo-tutorialinaja.png" />
                <img src="/assets/title-tutorialinaja.png" alt="title-tutorialinaja.png" className='d-xs-none' />
            </Col>
            <Col xs={8} className='about-content-right text-center'>
                <p><b>Visi dan misi product</b></p>
                <p>Menjadi sebuah platform yang bersifat luas & mendidik, serta dikemas dalam bentuk unik dan efisien</p>
                <Link to='visi-misi'>
                    <Button variant='success' size='sm' className='float-right'>Selengkapnya..</Button>
                </Link>
            </Col>
        </Row>
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
            300000
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
