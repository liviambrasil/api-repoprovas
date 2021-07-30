import { getRepository } from "typeorm";
import Subjects from "../entities/subjects";

async function getAllSubjects(): Promise<Array<Subjects>> {
    return await getRepository(Subjects).find()
}

export { getAllSubjects }