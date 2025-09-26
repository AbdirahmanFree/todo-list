import { Task } from "./task";
import { Project } from "./project";
import "./style.css";

const myProject = new Project(
    "Boxing",
    "I want to be the best boxer I can be",
    "Red",
    "October 2nd",
    "2",
    false,
    "Consistently box 3 days aweek",
)
const task = new Task(
    "Buy gear",
    "Need head gear and mouth gard and shoes",
    "October 2nd",
    "1",
    "Necessary to start sparring",
    false,
    myProject
)
console.log(myProject)
myProject.addTask(task)
console.log(myProject)
myProject.deleteTask(task)
console.log(myProject)