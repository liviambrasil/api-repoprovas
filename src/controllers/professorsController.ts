import { Request, Response } from "express"
import joi from "joi"
import { getProfessorsBySubjects, getProfessorsList } from "../services/professorsService"

async function getProfessors(req:Request, res:Response) {
    try{
        const schema = joi.object({
            subject: joi.string().required()
        })
        const { error } = schema.validate(req.params)
        if(error) return res.status(400).send({ error: error.details[0].message })

        const { subject } = req.params
    
        const professors = await getProfessorsBySubjects(subject)
        res.send(professors)
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}

async function getAllProfessors(req:Request, res: Response) {
    const professors = await getProfessorsList()

    res.send(professors)
}

export { getProfessors, getAllProfessors }