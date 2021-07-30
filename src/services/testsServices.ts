import { getRepository } from "typeorm";
import Category from "../entities/categories";
import Professor from "../entities/professors";
import Subject from "../entities/subjects";
import Test from "../entities/tests";
import reqTestType from "../interfaces/testType";

export async function addTest ({name, category, subject, professor}: reqTestType) {
    const categoryId:Category = await getRepository(Category).findOne({name: category})
    const subjectId:Subject = await getRepository(Subject).findOne({name: subject})
    const professorId:Professor = await getRepository(Professor).findOne({name: professor})

    await getRepository(Test).insert({name, categoryId: categoryId.id, subjectId: subjectId.id, professorId: professorId.id})
}