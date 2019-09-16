import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import "./video-upload.css";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

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
            <div>
              <h4>Upload Video</h4>
              <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*,audio/*,video/*"
                maxSizeBytes={10485760}
              />
            </div>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default VideoUpload;
