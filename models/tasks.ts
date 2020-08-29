import {db} from "../data/dbConfig";



export function getProjects() {
    return db("projects");
}

