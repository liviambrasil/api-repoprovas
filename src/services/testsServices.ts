import { getRepository } from "typeorm";
import Category from "../entities/categories";
import Professor from "../entities/professors";
import Subject from "../entities/subjects";
import Test from "../entities/tests";
import reqTestType from "../interfaces/testType";

async function addTest ({name, category, subject, professor, link}: reqTestType) {
    const categoryId:Category = await getRepository(Category).findOne({name: category})
    const subjectId:Subject = await getRepository(Subject).findOne({name: subject})
    const professorId:Professor = await getRepository(Professor).findOne({name: professor})

    await getRepository(Test).insert({
        name,
        link,
        categoryId: categoryId.id, 
        subjectId: subjectId.id, 
        professorId: professorId.id,
    })
}

async function getTests () {
    const result = await getRepository(Test).find({relations: ["subject", "professor", "category"]})
    return result
}

export { addTest, getTests }