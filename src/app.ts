import "./setup";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import { connectDatabase } from "./database";
import { teste } from "./controllers/controller";


const app = express();
app.use(cors());
app.use(express.json());


export async function init() {
    await connectDatabase();
}

app.get("/teste", teste);

export default app;