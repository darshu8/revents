import React, { Component } from "react"

class Subtask extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          <div>  
              
              {
                   
                   this.props.list.map((task, index) => {
                   return <div class="card"> <div  class="container text-color"> <h4><b>{task.name}</b></h4> </div></div>
                   })
               }

          </div> 

        ) 

    }
}

export default Subtask;