import { getRepository } from "typeorm";
import Category from "../entities/categories";
import Professor from "../entities/professors";
import Subject from "../entities/subjects";
import Test from "../entities/tests";
import reqTestType from "../interfaces/testType";

export async function addTest ({name, category, subject, professor}: reqTestType) {
    const categoryId:number = (await getRepository(Category).findOne({name: category})).id
    const subjectId:number = (await getRepository(Subject).findOne({name: subject})).id
    const professorId:number = (await getRepository(Professor).findOne({name: professor})).id

    await getRepository(Test).insert({name, categoryId, subjectId, professorId})
}