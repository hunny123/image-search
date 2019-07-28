import React, { Component } from 'react';

import './App.css';
class Imagelister extends Component{
    render(){
       
        return (
            <div className="container">
                <div className="row">
             {this.props.data.map((url)=>(
                 <div className="col-md-4">
                 <img className="m-1 img" id={url[23]}src ={url}/>
                 </div>
                ))
                }

                    </div>
            </div>





        );
    }
}
export default Imagelister;