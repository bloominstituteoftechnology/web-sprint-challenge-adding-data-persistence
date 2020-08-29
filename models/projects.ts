import {db} from "../data/dbConfig";



export function getProjects() {
    return db("projects");
}

export function getProjectById(id:string) {
    return db("projects").where({id});
}

//@ts-ignore
export async function createProject(project){//todo: project interface
    //schema for project insert obj:
    /*
    {name: string
    desc?: string
    tasks?: [{desc: stirng, completed?: falseIfUnd, notes?: string}]
    completed?: falseIfUnd
    }
     */
     const [id] = await db("projects").insert(project).returning("id");//returning added for postgres
     return getProjectById(id);
}

export function getResourceById(id:string) {
    return db("resources").where({id});
}
