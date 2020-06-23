import React, { Component } from "react"

class Message extends Component{
constructor(){
  super()
  this.state={
    'message':"Thanks for Visiting."
  }
}

changeMessage() {
  this.setState({
    message:"Thanks for subscribing"
  })
}

showMessage(){
  return "Darshan";
}
render(){
        return(
          <div>
            <div>{this.state.message}</div>
            {()=>this.showMessage()}
            <button onClick={()=>this.changeMessage()}>Subscribe</button> 
          </div>
        ) 

    }
}

export default Message;