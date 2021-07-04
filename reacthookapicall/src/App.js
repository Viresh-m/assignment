import React, { useEffect,useState } from 'react'
import Card from './card'
import './App.css'
import axios from 'axios'

function App() {
  var [data, setdata] = useState([])
  useEffect(()=>{
       const url="https://finalspaceapi.com/api/v0/character?limit=50";
       axios.get(url)
       .then(res_data=>{
         console.log(res_data);
         setdata(res_data.data);
       })
       .catch(err=>{
          console.log(err);
       })
  },[])
  
  return (
    <div id="container">
    <div id="page_title">Final Space <p>(Hover for more details)</p></div>
       {data.map(obj=> <Card data={obj}/>)}
    </div>
  )
}


export default App;