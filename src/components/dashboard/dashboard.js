import React, { Component } from "react"
import {getAllTask, saveTask}  from "../../service/todoservice"
import Task from "./task/task";
import Subtask from "./subtask/subtask";

import './dashboard.css';

class Dashboard extends Component{
    constructor(props){
        super(props)
        debugger;
        localStorage.clear()
        saveTask({ "id": 1, "name": "Homework", "subtasks": [ { "subTaskid": 1, "name": "Math Assignment", "isCompleted": false }, { "subTaskid": 2, "name": "Science Assignment", "isCompleted": true }, { "subTaskid": 3, "name": "History ", "isCompleted": true } ] })
        saveTask({ "id": 1, "name": "Grocery", "subtasks": [ { "subTaskid": 1, "name": "bring Fruit", "isCompleted": true }, { "subTaskid": 2, "name": "Oil", "isCompleted": false }, { "subTaskid": 3, "name": "Paper", "isCompleted": true } ] })
        saveTask({ "id": 1, "name": "Office", "subtasks": [ { "subTaskid": 1, "name": "Send email", "isCompleted": false }, { "subTaskid": 3, "name": "Audit", "isCompleted": true } ] })

        var taskList=getAllTask()
        this.state={"taskList":taskList,"subtaskList":[]};
        this.clickHandler.bind(this)
    }

    clickHandler = (subtask) => {
        this.setState({"subtaskList":subtask})    
    }

    render(){
        const {taskList, subtaskList} = this.state;
        return(
            <React.Fragment>
                TODO APP1
                        <div class="split left">
                           <button class="button">Add Task</button>
                            <div class="centered">
                                <Task list={taskList} taskClickHandler={this.clickHandler}></Task>
                            </div>
                        </div>

                        <div class="split right">
                            <div class="centered">
                                <Subtask list={subtaskList} ></Subtask>
                            </div>
                        </div>
            </React.Fragment>
        ) 

    }
}

export default Dashboard;