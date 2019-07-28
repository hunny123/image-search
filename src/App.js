import React, { Component } from 'react';

import './App.css';
import Imagelister from './Imagelister';
class App extends Component {
  state ={
    url:[],
    query:""
  }
  updateQuery = (query) => {
   
    setTimeout(100);
    
    this.setState({ query: query.trim()})
    
    
    
    
    
  }
  apiCall(r){
    let data1=[];
   
    
    if(r!==""){
    fetch(`https://api.qwant.com/api/search/images?q=${r}&t=images&count=10&safesearch=1&locale=en_US&uiv=%204`)
      .then(response => response.json())
      .then(a=>{
        if(a!==undefined){
       a.data.result.items.forEach(element => {
        data1.push(element.media)
         
       });
       this.setState({
        url:data1
      })}
     
      });
      
      
  }}
  render() {
    
      
      if(this.state.query){
      this.apiCall(this.state.query)
      
        
     return (
      <div className="">
        <div className="header">
        </div>
        <div className="search container-fluid py-1">
         
        
        <input className="search-box my-3 pl-5" placeholder="search image" value={this.state.query} onChange ={(event) => this.updateQuery(event.target.value)}/>

        </div>
        
        <Imagelister data = {this.state.url}/>
      </div>
    );}
    else{

      return (
        <div className="">
          <div className="header">
          </div>
          <div className="search container-fluid py-1">
           
          
          <input className="search-box my-3 pl-5" placeholder="search image" value={this.state.query} onChange ={(event) => this.updateQuery(event.target.value)}/>
  
          </div>
         
        </div>
      );
    }

  }
}

export default App;
