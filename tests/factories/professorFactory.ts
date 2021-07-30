import { getRepository, ObjectLiteral } from "typeorm";
import Professor from "../../src/entities/professors";
import subjectsProfessors from "../../src/entities/subjectsProfessors";

async function createProfessor(): Promise<number>{
    const result = await getRepository(Professor).insert({name: "Mácia Moraes"})
    return(result.generatedMaps[0].id)
}

async function createRelation(subjectId:number, professorId:number) {
    await getRepository(subjectsProfessors).insert({subjectId, professorId})
}

export { createProfessor, createRelation }