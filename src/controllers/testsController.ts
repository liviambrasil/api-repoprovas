import { Request, Response } from "express"
import reqTestType from "../interfaces/testType"
import { testSchema } from "../schemas/testSchema"
import { addTest } from "../services/testsServices"

async function newTest (req:Request, res:Response) {
    const { error } = testSchema.validate(req.body)
    if(error) return res.status(400).send({ error: error.details[0].message })

    const { name, category, subject, professor }: reqTestType = req.body

    try {
        await addTest({name, category, subject, professor})
        res.sendStatus(201)
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}

export { newTest }