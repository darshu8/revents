import React, { Component } from "react"
import Child from "./Child";

class Parent extends Component{
  clickHandler(name){
    alert(name)
    debugger
    this.setState({"name":name})
   
  }

constructor(props){
  super(props)
  this.state={
    name:null
  }
}

    render(){
      
      const {name}=this.state;
        return(
          <React.Fragment>
          <Child handlerFunction={this.clickHandler}></Child>
          From child {name}
          </React.Fragment>
        )


    }
}

export default Parent;