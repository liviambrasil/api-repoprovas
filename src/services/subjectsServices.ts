import { getRepository } from "typeorm";
import Subject from "../entities/subjects";

async function getAllSubjects(): Promise<Array<Subject>> {
    const result: Subject[] = await getRepository(Subject).find()
    return result
}

export { getAllSubjects }