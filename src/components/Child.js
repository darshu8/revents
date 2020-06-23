import React, { Component } from "react"
import { render } from "@testing-library/react";

class Child extends Component{
  
    render(){
        return(
          <div>THIS IS CHILD COMPONANT
            <div><button onClick={()=>this.props.handlerFunction("darshan")}>Click Me</button></div>
          </div>       
      ) 

    }
}


function myfunction(props){
  return render(<h1>Hello</h1>)
}
export default Child;