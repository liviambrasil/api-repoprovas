import { getRepository, ObjectLiteral } from "typeorm";
import Subject from "../../src/entities/subjects";

async function getSubjectParam():Promise<string> {
    const subjects = await getRepository(Subject).find()
    return(subjects[Math.floor(Math.random()*subjects.length)].name)
}

export { getSubjectParam }