import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import React from "react";

// css
import "./Wrapper.css";

export default class VideoUploader extends React.Component {
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
    );
  }
}
