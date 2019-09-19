import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import "./video-upload.css";
import Dropzone, { ILayoutProps  } from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'


 const LayoutDropzone = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {
  return (

    <div className="video-upload">
    
      {previews}
      <div {...dropzoneProps}>
      {files.length === 0 && <img src="/assets/addvideo.png" width="200" alt="video-upload" />  }
      {files.length === 0 && <h3 className="content-form">Drag and drop in here <br/> Or</h3> }
      {files.length === 0 && <Fab variant="extended" color="primary"> Browse files</Fab>}
      {input}
      </div>

      {files.length > 0 && submitButton}
    </div>
  )
}

export class VideoUpload extends Component {
  render() {
    const getUploadParams = () => {
      return { url: "https://api.tutorialinaja.tech/vidu/v1/upload" };
    };

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }: any, status: any) => {
      console.log(status, meta, file);  
    };

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (
      files: { map: (arg0: (f: any) => any) => void },
      allFiles: { forEach: (arg0: (f: any) => any) => void }
    ) => {
      console.log(files.map((f: { meta: any }) => f.meta));
      allFiles.forEach((f: { remove: () => void }) => f.remove());
    };

    return (
      <Container maxWidth="lg" className="wrapper">
        <Card style={{ borderRadius: "25px" }}>
          <CardContent>
            <Grid container alignItems="center" justify="center">
              
              <Dropzone  
                LayoutComponent={LayoutDropzone}
                inputContent=""
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*,audio/*,video/*"
                maxSizeBytes={10485760}
              />
            </Grid>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default VideoUpload;
