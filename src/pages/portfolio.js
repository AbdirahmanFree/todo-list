import { Project } from "../project";
import { Portfolio } from "../portfolio";


const portfolio = document.createElement("div");
portfolio.id = "portfolio-page"
const name = document.createElement("input");
name.id = "user-name"
const goal = document.createElement("input");
goal.id = "user-goal"
name.placeholder = "Abdirahman Abdulahi"
goal.placeholder = "Goal..."
portfolio.appendChild(name)
portfolio.appendChild(goal)



export { portfolio }