

function getAllTask(){
var tasks=[];
if(localStorage.getItem("tasks")==null || localStorage.getItem("tasks")===""){
    localStorage.setItem("tasks",[]);
} else{
    tasks=JSON.parse(localStorage.getItem("tasks"));
}
return tasks;
}

function saveTask(task){
var taskList=getAllTask();
taskList.push(task);
localStorage.setItem("tasks",JSON.stringify(taskList));
}


export {getAllTask, saveTask}