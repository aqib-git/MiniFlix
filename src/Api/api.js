import axios from 'axios';

export function fetchCloudinaryImages() {
  return axios.get('http://res.cloudinary.com/aqibpandit/image/list/miniflix.json')
          .then(res => {
            return res.data.resources;
        });
}


export function fetchCloudinaryVideos() {
  return axios.get('http://res.cloudinary.com/aqibpandit/video/list/miniflix.json')
          .then(res => {
            return res.data.resources;
        });
}
