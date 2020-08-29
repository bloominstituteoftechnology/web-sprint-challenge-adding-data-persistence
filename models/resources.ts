import {db} from "../data/dbConfig";


export function getResources(projectId: string) {
    return db("project_resources as pr")
        .join("projects as p", "p.id", "pr.projectId")
        .join("resources as r", "r.id", "pr.taskId")
        .where("pr.projectId", projectId)
        .select("p.name as projectName", "p.description as projectDescription", "r.*");
}

export function getResource(id: string) {
    return db("resources").where({id});

}

//@ts-ignore
export async function createResource(resource, projectId) {//todo: type task
    const resExists = await db("resources").where("name", resource.name);
    if (resExists) {//ensures resources exist one time
        await db("project_resources").insert({projectId: projectId, resourceId: resExists[0].id});
        return getResource(resExists[0].id);
    }
    const [id] = await db("resources").insert(resource).returning("id");
    console.log("id ", id);
    await db("project_resources").insert({projectId: projectId, resourceId: id});
    return getResource(id);

}