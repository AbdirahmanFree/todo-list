import { Project } from "./project";
class Task{
    constructor(title, description, dueDate, priority, notes, checked, project){
        this.title = title;
        this.id = crypto.randomUUID();
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checked = checked;
        this.project = project;
    }
    getColor() {
        return this.project.color
    }
    getId(){
        return this.id;
    }
}

export { Task }