import { getRepository } from "typeorm";
import Professor from "../entities/professors";
import Subject from "../entities/subjects";
import subjectsProfessors from "../entities/subjectsProfessors";

async function getProfessorsBySubjects(subject:string): Promise<Professor[]> {
    const subjectId: Subject = await getRepository(Subject).findOne({name: subject})

    const professorsId:subjectsProfessors[] = await getRepository(subjectsProfessors).find({subjectId:subjectId.id})
    const arrProfessorsId = professorsId.map((e) => e.professorId)

    const professors: Professor[] = await getRepository(Professor).findByIds(arrProfessorsId)

    return professors
}

export { getProfessorsBySubjects }