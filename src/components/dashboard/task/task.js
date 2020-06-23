import React, { Component } from "react"

class Task extends Component{
  
    render(){
       
        return(
          <div> 
              {
                   
                this.props.list.map((task, index) => {
                return <div onClick={()=>this.props.taskClickHandler(task.subtasks)} class="card"> <div  class="container text-color"> <h4><b>{task.name}</b></h4> </div></div>
                })
            }
          </div> 

        ) 

    }
}

export default Task;