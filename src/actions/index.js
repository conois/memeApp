import axios from 'axios';

export function loadImage(){
  return(dispatch) => {
    return axios.get("https://api.imgflip.com/get_memes")
    .then((response) => {
      dispatch(changeImage(response.data.memes.url));
    })
  }
}

export function changeImage(image) {
  return {
    type: "CHANGE_IMAGE",
    image
  }
}