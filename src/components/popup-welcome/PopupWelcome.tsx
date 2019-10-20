import React from 'react';
import { Button, Grid, Dialog, DialogActions, DialogContent, DialogTitle, Slide } 
    from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef<undefined, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class PopupWelcome extends React.Component {

    state = {
        open : true
    }

    componentDidMount(){
        const isDisplay = localStorage.getItem("isDisplay");
        if(isDisplay === "false") {
           this.setState({ open : false })
        }
    }
  

    handleClose = () => {   
        this.setState({ open : false })
        localStorage.setItem("isDisplay", "false");
    };

    render(){
        return (
            <Dialog
                open={this.state.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
            >
                <DialogTitle>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item><img src="/assets/logo-tutorialinaja-red.png" width="40" alt="logo-tutorialinaja-red.png" /> </Grid>
                        <Grid item xs>Welcome to TutorialinAja</Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                selamat datang di tutorialinaja.com.
                didalam website ini anda dapat mencari berbagai macam tutorial yang anda butuhkan dengan cepat dan mudah, serta video yang disajikan juga unik dan menarik.
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Close
                </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
