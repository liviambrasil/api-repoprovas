import { Request, Response } from "express"
import { getProfessorsBySubjects } from "../services/professorsService"

async function getProfessors(req:Request, res:Response) {
    const { subject } = req.params
    const professors = await getProfessorsBySubjects(subject)
    //console.log(professors)
    res.send(professors)
}

export { getProfessors }