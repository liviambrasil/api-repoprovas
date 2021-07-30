import { getRepository } from "typeorm";
import Test from "../../src/entities/tests";
import Subject from "../../src/entities/subjects";
import Professor from "../../src/entities/professors";
import subjectsProfessors from "../../src/entities/subjectsProfessors";

async function clearDatabase () {
    await getRepository(Test).delete({})
    await getRepository(Subject).delete({})
    await getRepository(Professor).delete({})
    await getRepository(subjectsProfessors).delete({})
}

export { clearDatabase }