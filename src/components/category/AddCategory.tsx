import React from 'react';
import { Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField, Grid } 
    from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef<undefined, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type AddCategoryProps = {
    open : boolean;
    toggleMe : () => void;
}

export default class AddCategory extends React.Component<AddCategoryProps> {
        render(){
        return (
            <Dialog
                open={this.props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.props.toggleMe}
            >
               <DialogTitle >
                    <Typography variant="h6">Add Category</Typography>
                </DialogTitle>
                <DialogContent dividers style={{maxWidth:"300px"}}>
                    <TextField
                        fullWidth
                        label="Title"
                        />
                    <TextField
                        fullWidth
                        label="Description"
                        multiline
                        rows="3"
                        />
                </DialogContent>
                <DialogActions>
                    <Grid container alignItems="center" justify="space-between">
                        <Button onClick={this.props.toggleMe}>
                            Close
                        </Button>
                        <Button variant="contained" color="primary">
                            Save
                        </Button>
                    </Grid>
                </DialogActions>
            </Dialog>
        );
    }
}
