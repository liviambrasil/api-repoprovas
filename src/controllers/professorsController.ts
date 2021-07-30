import { Request, Response } from "express"
import joi from "joi"
import { getProfessorsBySubjects } from "../services/professorsService"

async function getProfessors(req:Request, res:Response) {
    const schema = joi.object({
        subject: joi.string().required()
    })
    const { error } = schema.validate(req.params)
    if(error) return res.status(400).send({ error: error.details[0].message })

    const { subject } = req.params

    const professors = await getProfessorsBySubjects(subject)
    res.send(professors)
}

export { getProfessors }