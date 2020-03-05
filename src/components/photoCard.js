import React from 'react';
import './styles.css'



const PhotoCard = (props) => {
    

    return(
        <div className='card-container'>
            <h1>APOD: {props.title}</h1>
            <p>{props.date}</p>
            <img src={props.hdurl}></img>
            <iframe width={props.width} height={props.height} src={props.video} frameBorder="0" allow="autoplay; encrypted-media" allowFullscreen></iframe>
            <p>Description: {props.explanation}</p>
        </div>
    )

};


export default PhotoCard;