import React, { useState } from 'react'
import './card.css'

function Card(props) {
    const [isShown, setIsShown] = useState(true);
    function changestate(e) {
        setIsShown(!isShown);
      }
    if(isShown){
        return (
            <div id="box" onMouseEnter={changestate} >
                
            <img id="box_image"src={props.data.img_url} alt="anime_image"/>
            <div id="title">{props.data.name}</div>
           </div> 
        )
    }else{
        return (
            <div id="box" onMouseLeave={changestate} >
                 <div id="title">{props.data.name}</div>
                 <ul>
                    <li className="info"><span>Gender: </span>{props.data.gender}</li>
                    <li className="info"><span>Origin: </span>{props.data.origin}</li>
                    <li className="info"><span>Species: </span>{props.data.species}</li>
                    <li className="info"><span>Status: </span>{props.data.status}</li>
                 </ul>
               
            </div> 
        )
    }
}

export default  Card;