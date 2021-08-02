import { getRepository } from "typeorm";
import Subject from "../entities/subjects";

async function getAllSubjects(): Promise<Array<Subject>> {
    return await getRepository(Subject).find()
}

export { getAllSubjects }