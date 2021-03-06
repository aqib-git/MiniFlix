import React, {Component} from 'react';
import Nav from './Nav';
import axios from 'axios';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { Share } from 'react-twitter-widgets'
import { connect } from 'react-redux';

const DisplayImages = ({images}) => {
  return (
    <div>
      <Nav/>
      <h3 className="text-center"> Latest Images on Miniflix </h3>
      <hr/>

      <div className="col-sm-12">
        <CloudinaryContext cloudName="aqibpandit">
          { images.map((data, index) => (
              <div className="col-sm-4" key={index}>
                <div className="embed-responsive embed-responsive-4by3">
                  <Image publicId={data.public_id} width="300" height="300" controls></Image>
                </div>
                <div> Created at {data.created_at} </div>
                <Share url={`http://res.cloudinary.com/aqibpandit/image/upload/${data.public_id}`} />
              </div>
            ))
          }
        </CloudinaryContext>
      </div>
    </div>
  );
}

export default DisplayImages;
