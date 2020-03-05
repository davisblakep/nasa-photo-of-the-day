import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './photoCard';

const PhotoDetails = () => {
    const [photoList, setPhotoList] = useState([]);
    useEffect(() =>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {console.log(response);
        setPhotoList(response.data)})

 }, []);

    useEffect(() => {
    console.log("Hopefully, this is the photo list", photoList);
  }, [photoList]);

//   const mediaItem = (props) => {
//     let mediaTag = photoList.hdurl;
//     if(mediaTag){
//         return <img src={Photo.hdurl}></img>
//     } else {
//         return <iframe width="560" height="315" src={props.video} frameBorder="0" allow="autoplay; encrypted-media" allowFullscreen></iframe>
//     };
// }

if(photoList.media_type === "image"){
  return(
      <PhotoCard explanation={photoList.explanation}
       hdurl={photoList.hdurl} 
       title={photoList.title} 
       date={photoList.date}
       width={"0"}
        height={"0"}/>
  )} else {
      return(
        <PhotoCard explanation={photoList.explanation}
        video={photoList.url} 
        width={"560"}
        height={"315"}
        title={photoList.title} 
        date={photoList.date}/>
      )
  }
};

export default PhotoDetails;