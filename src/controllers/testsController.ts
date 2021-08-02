import { Request, Response } from "express"
import { getRepository } from "typeorm"
import Test from "../entities/tests"
import Category from "../entities/categories"
import reqTestType from "../interfaces/testType"
import { testSchema } from "../schemas/testSchema"
import { addTest, getTests } from "../services/testsServices"

async function newTest (req:Request, res:Response) {
    const { error } = testSchema.validate(req.body)
    if(error) return res.status(400).send({ error: error.details[0].message })

    const { name, category, subject, professor, semester, link }: reqTestType = req.body

    try {
        await addTest({name, category, subject, professor, semester, link})
        res.sendStatus(201)
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}

async function getAllTests (req:Request, res:Response) {
    try {
        const tests = await getTests()
        res.send(tests)
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}

async function getCategories (req: Request, res: Response) {
    try{
        const result = await getRepository(Category).find()
        res.send(result)
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}

async function getTestsByCategory (req: Request, res: Response) {
    const { professorId, categoryId } = (req.params)


    try{
        const result = await getRepository(Test).find({categoryId: Number(categoryId), professorId: Number(professorId)})
        res.send(result)
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}

export { newTest, getAllTests, getCategories, getTestsByCategory }