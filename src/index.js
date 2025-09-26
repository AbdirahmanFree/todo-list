import { Task } from "./task";
import { Project } from "./project";
import { Portfolio } from "./portfolio";
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

function toggleZIndex(){
    let z = window.getComputedStyle(projects).zIndex
    z== "1" ? projects.style.zIndex = "-1" : projects.style.zIndex = "1";
    return
}

const projects = document.getElementById("projects");
const portfolioBtn = document.getElementById("portfolio-btn")
portfolioBtn.addEventListener("click", () => {
    toggleZIndex()
    console.log("hello")
})

