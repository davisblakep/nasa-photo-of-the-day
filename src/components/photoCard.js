import React from 'react';
import './styles.css'

const PhotoCard = (props) => {
    return(
        <div className='card-container'>
            <h1>Astronomy Photo of the Day</h1>
            <img src={props.hdurl}></img>
            <p>Description: {props.explanation}</p>
            <p>Copyright: {props.copyright}</p>
        </div>
    )

};


export default PhotoCard;