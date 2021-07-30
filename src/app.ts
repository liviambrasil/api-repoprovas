import "./setup";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import { connectDatabase } from "./database";
import { newTest } from "./controllers/testsController";
import { getSubjects } from "./controllers/subjectsController";
import { getProfessors } from "./controllers/professorsController";


const app = express();
app.use(cors());
app.use(express.json());


export async function init() {
    await connectDatabase();
}

app.post("/new-test", newTest);
app.get("/subjects", getSubjects);
app.get("/professors/:subject", getProfessors);

export default app;