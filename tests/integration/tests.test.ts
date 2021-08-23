import supertest from "supertest";
import app, { init } from "../../src/app";
import { getConnection, getRepository } from "typeorm";
import { clearDatabase } from "../utils/database";
import { bodyTest } from "../factories/bodyFactory";
import Test from "../../src/entities/tests"

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

describe("GET /tests" ,() => {

  beforeEach(async() => {
    const {name, link} = bodyTest
    const body = {name, link, categoryId: 1, subjectId: 1, professorId: 1}
    await getRepository(Test).insert(body)
  })

  it('returns status 200 for valid params', async() => {
    const response = await agent.get(`/professors`)
    expect(response.status).toEqual(200);
  })
  
  it('returns an array of professors', async()=> {
    const response = await agent.get(`/tests`)
    expect(response.body).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number), 
        name: expect.any(String),
        link: expect.any(String),
        categoryId: expect.any(Number),
        subjectId: expect.any(Number),
        professorId: expect.any(Number),
        subject:expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            semesterId: expect.any(Number)
          }),
        professor:expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String)
          }),
        category: expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String)
        })
      })
    ]))
  })
})