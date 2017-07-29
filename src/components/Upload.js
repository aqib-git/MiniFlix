import React, { Component } from 'react';
import Nav from './Nav';

class Upload extends Component {

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'aqibpandit',
        upload_preset: 'upnffrcv',
        tags: ['miniflix']
      },
      function(error, result) {
          console.log("This is the result of the last upload", result);
      });
  }

  render() {

    return (
      <div>
        <Nav />
        <h3 className="text-center">Upload Your Media in a Jiffy</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <button onClick={this.uploadWidget} className="btn btn-lg btn-info"> Upload Media</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;