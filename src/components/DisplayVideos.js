import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { CloudinaryContext, Video } from 'cloudinary-react';
import { Share } from 'react-twitter-widgets'

class Display extends Component {
  state = { videos: [] };

  getVideos() {
    axios.get('http://res.cloudinary.com/aqibpandit/video/list/miniflix.json')
          .then(res => {
            console.log(res.data.resources);
            this.setState({ videos: res.data.resources});
          }).catch(function (error){
            if(error.response.status === 404) {
              console.log('No video Found');
            }  
          });
  }

  componentDidMount() {
    this.getVideos();
  }

  render() {

    const { videos }  = this.state;

    return (
      <div>
        <Nav {...this.props} />
        <h3 className="text-center"> Latest Videos on Miniflix </h3>
        <hr/>

        <div className="col-sm-12">
          <CloudinaryContext cloudName="aqibpandit">
            { videos.map((data, index) => (
                <div className="col-sm-4" key={index}>
                  <div className="embed-responsive embed-responsive-4by3">
                    <Video publicId={data.public_id} width="300" height="300" controls></Video>
                  </div>
                  <div> Created at {data.created_at} </div>
                  <Share url={`http://res.cloudinary.com/aqibpandit/video/upload/${data.public_id}.mp4`} />
                </div>
              ))
            }
          </CloudinaryContext>
        </div>
      </div>
    );
  }
}

export default Display;