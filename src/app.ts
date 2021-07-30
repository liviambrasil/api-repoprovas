import "./setup";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import { connectDatabase } from "./database";
import { newTest } from "./controllers/testsController";


const app = express();
app.use(cors());
app.use(express.json());


export async function init() {
    await connectDatabase();
}

app.post("/new-test", newTest);

export default app;