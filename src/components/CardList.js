import React, { useState, useEffect } from 'react';
import axios from 'axios';



import PhotoCard from './PhotoCard';

function CardList(props){
    console.log("Original Cardlist Props", props)
    console.log("Edited CardList Props", props.dateInfo)

    let newDate = useState(props.dateInfo)

    function formatDate() {
    
        let month = '' + (props.dateInfo.getMonth() + 1);
        let day = '' + props.dateInfo.getDate();
        let year = props.dateInfo.getFullYear();
    
        if (month.length < 2){
            month = '0' + month};
        if (day.length < 2){
            day = '0' + day};
    
        return [year, month, day].join('-');
    }

    console.log("NewDate state", formatDate(newDate))

    let newDateInfo = formatDate(newDate);

    
    const [nasaPhoto, setNasaPhoto] = useState([]);
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${newDateInfo}`)
        .then(response => {
            console.log(response.data);
            setNasaPhoto([response.data]);
        })
        .catch(err => {
            console.log(err);
        })
    }, [newDateInfo]);

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