import { getRepository, ObjectLiteral } from "typeorm";
import Subject from "../../src/entities/subjects";

async function createSubject():Promise<number> {
    const result = await getRepository(Subject).insert({name: "Psicologia e estudos da deficiência"})
    return(result.generatedMaps[0].id)
}

export { createSubject }