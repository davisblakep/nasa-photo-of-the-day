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


  return(
      <PhotoCard data={photoList} copyright={photoList.copyright} explanation={photoList.explanation} hdurl={photoList.hdurl}/>
  )
};

export default PhotoDetails;