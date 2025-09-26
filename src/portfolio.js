import { Project } from "./project";

class Portfolio {
    projects = []
    constructor(){

    }
    addProject(project){
        this.projects.push(project);
        return;
    }
    deleteProject(project) {
        for (let i = 0; i< this.projects.length; i++){
            if(this.projects[i] ==  project) {
                this.projects.splice(i,1);
                return;
            }
        }
    }


}

export { Portfolio }