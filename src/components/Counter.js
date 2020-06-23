import React, { Component } from "react"
import { 
  useParams
} from "react-router-dom";
class Counter extends Component{
constructor(){
  super()
  this.state={
    count:0
  }
}

increment() {
  let { addBy } = useParams();

  this.setState({
    count:this.state.count+parseInt(addBy)
  })
}
 
render(){
  let { addBy } = useParams();
        return(
          <div>
            <div>
              Counter :- {this.state.count}
              <button onClick={()=>this.increment()}> + {addBy} </button>
            </div>
          </div>
        ) 

    }
}

export default Counter;