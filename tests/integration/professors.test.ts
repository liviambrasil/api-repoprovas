import supertest from "supertest";
import app, { init } from "../../src/app";
import { getConnection } from "typeorm";
import { clearDatabase } from "../utils/database";
import { getSubjectParam } from "../factories/subjectFactory";
import Subject from "../../src/entities/subjects";

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

describe("GET /professors/:subject" ,() => {
  it('returns status 200 for valid params', async () => {
    const id = await getSubjectParam()
    const response = await agent.get(`/professors/${id}`)
    expect(response.status).toEqual(200);
  })
  
  it('returns an array of professors', async()=> {
    const id = await getSubjectParam()
    const response = await agent.get(`/professors/${id}`)
    expect(response.body).toEqual(expect.arrayContaining([{id: expect.any(Number), name: expect.any(String)}]))
  })
})

describe("GET /professors" ,() => {
  it('returns status 200 for valid params', async() => {
    const response = await agent.get(`/professors`)
    expect(response.status).toEqual(200);
  })
  
  it('returns an array of professors', async()=> {
    const response = await agent.get(`/professors`)
    expect(response.body).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number), 
        name: expect.any(String),
        subject: expect.arrayContaining([{
          id: expect.any(Number),
          name: expect.any(String),
          semesterId: expect.any(Number)
        }])
      })
    ]))
  })
})

