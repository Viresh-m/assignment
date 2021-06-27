import React, { Component } from 'react'
import './card.css'
class card extends Component {
    constructor(props) {
        super(props);
        this.state={
           
        };
    }
    
    render() {
        return (
            <div id="box">
                
               <img id="box_image"src={this.props.data.img_url} alt="anime_image"/>
               <div id="title">{this.props.data.name}</div>
            </div>
        )
    }
}
export default  card;