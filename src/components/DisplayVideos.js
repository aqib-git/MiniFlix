import React, { Component } from 'react';
import Nav from './Nav';
import { CloudinaryContext, Video } from 'cloudinary-react';
import { Share } from 'react-twitter-widgets';

const DisplayVideos = ({videos}) => {
  return (
    <div>
      <Nav/>
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

export default DisplayVideos;
