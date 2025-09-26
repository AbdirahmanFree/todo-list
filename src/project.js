import { Task } from "./task";
import { createECard } from "./display";
class Project {
    tasks = [];
    constructor(title, description, color, dueDate, priority, checked, notes ){
        this.title = title;
        this.description = description
        this.color = color;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
        this.notes = notes;

    }
    addTask(task){
        this.tasks.push(task);
    }
    getTasks(){
        return this.tasks;
    }

    deleteTask(task){
        for (let i = 0; i< this.tasks.length; i++){
            if(this.tasks[i] == task) {
                this.tasks.splice(i,1)
                return
            }
        }

            
    }
    createCard(){
        return createECard(this.title)
    }
    
    
}



export { Project }