import React, { Component } from 'react'
import './card.css'
class card extends Component {
    constructor(props) {
        super(props);
        this.state={
           isShown:true,
        };
    }
    changestate=(e)=>{
        this.setState(prevState=>{
            return{
                isShown:!prevState.isShown,
            }
        })
    }
    render() {
        if(this.state.isShown){
            return (
                <div id="box" onMouseEnter={this.changestate} >
                    
                <img id="box_image"src={this.props.data.img_url} alt="anime_image"/>
                <div id="title">{this.props.data.name}</div>
               </div> 
            )
        }else{
            return (
                <div id="box" onMouseLeave={this.changestate} >
                     <div id="title">{this.props.data.name}</div>
                     <ul>
                        <li className="info"><span>Gender: </span>{this.props.data.gender}</li>
                        <li className="info"><span>Origin: </span>{this.props.data.origin}</li>
                        <li className="info"><span>Species: </span>{this.props.data.species}</li>
                        <li className="info"><span>Status: </span>{this.props.data.status}</li>
                     </ul>
                   
                </div> 
            )
        }
    }
}
export default  card;