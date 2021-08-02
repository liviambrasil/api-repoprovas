import { getRepository } from "typeorm";
import Professor from "../entities/professors";
import Subject from "../entities/subjects";
import subjectProfessor from "../entities/subjectsProfessors";

async function getProfessorsBySubjects(subject:string): Promise<Professor[]> {
    const subjectId: Subject = await getRepository(Subject).findOne({name: subject})

    const professorsId:subjectProfessor[] = await getRepository(subjectProfessor).find({subjectId:subjectId.id})
    const arrProfessorsId = professorsId.map((e) => e.professorId)

    const professors: Professor[] = await getRepository(Professor).findByIds(arrProfessorsId)

    return professors
}

async function getProfessorsList(): Promise<Professor[]> {
    const professors: Professor[] = await getRepository(Professor).find({relations: ["subject"]})

    return professors
}

export { getProfessorsBySubjects, getProfessorsList }