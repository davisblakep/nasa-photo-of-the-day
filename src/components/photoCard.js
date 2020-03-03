import React from 'react';
import './styles.css'

const PhotoCard = (props) => {
    return(
        <div className='card-container'>
            <h1>APOD: {props.title}</h1>
            <p>{props.date}</p>
            <img src={props.hdurl}></img>
            <iframe width="560" height="315" src={props.video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p>Description: {props.explanation}</p>
        </div>
    )

};


export default PhotoCard;