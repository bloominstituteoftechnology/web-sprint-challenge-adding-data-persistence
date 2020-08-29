import {db} from "../data/dbConfig";



export function getTasks(projectId:string) {
    return db("project_tasks as pt")
        .join("projects as p", "p.id", "pt.projectId")
        .join("tasks as t", "t.id", "pt.taskId")
        .where("pt.projectId", projectId)
        .select("p.name as projectName", "p.description as projectDescription", "t.*");
}

export function getTask(id:string) {
    return db("tasks").where({id});

}

//@ts-ignore
export async function createTask(task, projectId) {//todo: type task
    const [id] = await db("tasks").insert({...task, projectId:projectId}).returning("id");
    await db("project_tasks").insert({projectId:projectId, taskId:id});
    return getTask(id);

}

/*
return db("zoos_animals as za")
        .join("zoos as z", "z.id", "za.zooId")
        .join("animals as a", "a.id", "za.animalId")
        .join("species as s", "s.id", "a.speciesId")
        .where("za.zooId", zooId)
        .select("a.id", "a.name", "s.name as species", "za.fromDate", "za.toDate");
 */