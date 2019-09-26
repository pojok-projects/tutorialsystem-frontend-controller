import React from "react";
import { Card, CardContent, Container, Typography, TextField, Grid, LinearProgress, Button, Fab } 
        from "@material-ui/core";
import { ILayoutProps, IPreviewProps  } from "react-dropzone-uploader";


const BrowseVideoUpload = ({ input, previews, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {

   return (
     <div className="video-upload">
        {previews}
       <div {...dropzoneProps}>
       {files.length === 0 && <img src="/assets/icon-add-video.png" className="video-upload-img"  alt="video-upload" />  }
       {files.length === 0 && <h3 className="video-upload-content-form">Drag and drop in here <br/> Or</h3> }
       {files.length === 0 && <Fab variant="extended" color="primary"> Browse files</Fab>}
       {input}
       </div>
       
     </div>
   )
 }

 const PreviewVideoUpload = ({ meta } : IPreviewProps) => {
    const { name, percent, status } = meta
  
    return (
      <Grid container justify="center">
        <Grid item>
        <video controls width="250" height="200"></video>
        </Grid>
        <Grid item xs>
        <Grid container direction="column" style={{ margin: "0 2.5%", width: "auto" }}>
          <Typography variant="h6" gutterBottom>{name}</Typography>
          <LinearProgress color="secondary" variant="determinate"  value={Math.round(percent)} />
            <TextField
              color="secondary"
              fullWidth
              label="Title"
              />
            <TextField
              fullWidth
              color="secondary"
              label="Description"
              multiline
              rows="3"
            />
            <Grid container justify="flex-end" style={{ marginTop: "5px" }}>
              <Button color="primary" >Save</Button>
            </Grid>
        </Grid>
        </Grid>
      </Grid>
      )
  }

 export {
    BrowseVideoUpload,
    PreviewVideoUpload
 };