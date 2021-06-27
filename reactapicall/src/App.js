import React, { Component } from 'react'
import Card from './card'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       data:[],
    }
 }
 async componentDidMount(){
   const url="https://finalspaceapi.com/api/v0/character?limit=50";
   const res=await fetch(url);
   const data=await res.json();
   this.setState({
     data:data,
   })
   console.log(data);
 }

  render() {
    return (
      <div id="container">
        <div id="page_title">Final Space</div>
        {this.state.data.map(obj=> <Card data={obj}/>)}
      </div>
    )
  }
}

export default App;