import React, { useState, useEffect } from 'react';
import axios from 'axios';



import PhotoCard from './PhotoCard';

function CardList(){

    const [nasaPhoto, setNasaPhoto] = useState([]);
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            console.log(response.data);
            setNasaPhoto([response.data]);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    console.log("nasaPhoto Data Array", nasaPhoto)

    return(
        <div>
            {nasaPhoto.map(x =>{
                return(
                    <PhotoCard {...x} />
                )
            })}
        </div>
    )
}

export default CardList;