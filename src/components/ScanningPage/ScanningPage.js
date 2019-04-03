import React from "react";
import {BrowserQRCodeReader} from "@zxing/library";

class ScanningPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    cameraQR(this);
    return (
        <video id="video"></video>
    );
  }
}

function cameraQR(that) {
    const codeReader= new BrowserQRCodeReader()
    codeReader.getVideoInputDevices()
    .then(videoDevices => decodingLoop(videoDevices, codeReader))
    .catch(err=> console.log(err));

}

function decodingLoop(videoDevices, codeReader){
    codeReader
        .decodeFromInputVideoDevice(videoDevices[0].deviceID, 'video')
        .then(result => {
            console.log(result.text);
            //decodingLoop(videoDevices, codeReader);
        })
        .catch(err => console.error(err));
}

export default ScanningPage;