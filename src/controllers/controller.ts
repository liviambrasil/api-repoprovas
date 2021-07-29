import { Request, Response } from "express"

async function teste (req:Request, res:Response) {
    console.log('rodou!')
    res.sendStatus(201)
}

export { teste }