import supertest from "supertest";
import app, { init } from "../../src/app";
import { getConnection } from "typeorm";
import { clearDatabase } from "../utils/database";
import { createSubject } from "../factories/subjectFactory";
import { bodyTest } from "../factories/bodyFactory";
import { createProfessor, createRelation } from "../factories/professorFactory";


beforeAll(async () => {
  await init();
});

beforeEach (async() => {
  await clearDatabase()
});

afterAll(async () => {
  await clearDatabase();
  await getConnection().close();
});

const agent = supertest(app)

describe("POST /new-test" ,() => {
  beforeEach(async() => {
    const subjectId: number = await createSubject()
    const professorId: number = await createProfessor()
    await createRelation(subjectId, professorId)
  })

  it('returns status 201 for valid params', async () => {
    const response = await agent.post("/new-test").send(bodyTest);
    expect(response.status).toEqual(201);
  })

  it('returns status 400 for invalid name', async() => {
    const response = await agent.post("/new-test").send({...bodyTest, name: 123});
    expect(response.status).toEqual(400);
  })

  it('returns status 400 for empty name', async() => {
    const response = await agent.post("/new-test").send({...bodyTest, name: ""});
    expect(response.status).toEqual(400);
  })

  it('returns status 400 for invalid category', async() => {
    const response = await agent.post("/new-test").send({...bodyTest, category: 123});
    expect(response.status).toEqual(400);
  })

  it('returns status 400 for invalid (not a string) category', async() => {
    const response = await agent.post("/new-test").send({...bodyTest, category: 123});
    expect(response.status).toEqual(400);
  })

  it('returns status 400 for invalid (not allowed string) category', async() => {
    const response = await agent.post("/new-test").send({...bodyTest, category: "wrongstring"});
    expect(response.status).toEqual(400);
  })

  it('returns status 400 for empty category', async() => {
    const response = await agent.post("/new-test").send({...bodyTest, category: ""});
    expect(response.status).toEqual(400);
  })

  it('returns status 400 for invalid subject', async() => {
    const response = await agent.post("/new-test").send({...bodyTest, subject: 123});
    expect(response.status).toEqual(400);
  })

  it('returns status 400 for empty subject', async() => {
    const response = await agent.post("/new-test").send({...bodyTest, subject: ""});
    expect(response.status).toEqual(400);
  })

  it('returns status 400 for invalid professor', async() => {
    const response = await agent.post("/new-test").send({...bodyTest, professor: 123});
    expect(response.status).toEqual(400);
  })

  it('returns status 400 for empty professor', async() => {
    const response = await agent.post("/new-test").send({...bodyTest, professor: ""});
    expect(response.status).toEqual(400);
  })
})