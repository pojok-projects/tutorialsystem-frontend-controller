import React from "react";
import { Typography, TextField, Grid, LinearProgress, Button } 
        from "@material-ui/core";
import { ILayoutProps, IPreviewProps  } from "react-dropzone-uploader";

const BrowseVideoUpload = ({ input, previews, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {

   return (
     <div className="video-upload">
        {previews}
       <div {...dropzoneProps}>
       {files.length === 0 && <img src="/assets/icon-add-video.png" className="video-upload-img"  alt="video-upload" />  }
       {files.length === 0 && 
          <h6 className="video-upload-content-form">
            <span>Drop File to Upload Or</span> <Button >Browse file</Button>
          </h6> }
       {input}
       </div>
     </div>
   )
 }

 const PreviewVideoUpload = ({ meta } : IPreviewProps) => {
    console.log("meta : ", meta)
    
    const { name, percent, status } = meta
    
    return (
      <Grid container justify="center" >
        <Grid item>
        <video controls width="250" height="200"></video>
        </Grid>
        <Grid item xs>
        <Grid container direction="column" style={{ margin: "0 2.5%", width: "auto" }}>
          <Typography variant="h6" gutterBottom>
            {name}&nbsp;
            <b>({percent}%) {(status === "exception_upload") ? " - Upload Failed": ""} </b>
          </Typography>
          <LinearProgress 
            className="video-upload-loading" 
            color={(status === "exception_upload") ? "secondary" : "primary" }
            variant="determinate"  value={Math.round(percent)} />
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