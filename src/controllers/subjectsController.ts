import { Request, Response } from "express"
import Subject from "../entities/subjects"
import { getAllSubjects } from "../services/subjectsServices"

async function getSubjects(req:Request, res:Response) {
    const result = await getAllSubjects()
    res.send(result)
}

export { getSubjects }