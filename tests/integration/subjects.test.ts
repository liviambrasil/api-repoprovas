import supertest from "supertest";
import app, { init } from "../../src/app";
import { getConnection } from "typeorm";
import { clearDatabase } from "../utils/database";

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

describe("GET /subjects" ,() => {
  it('returns status 200 for valid params', async () => {
    const response = await agent.get("/subjects")
    expect(response.status).toEqual(200);
  })
  it('returns an array of subjects', async()=> {
    const response = await agent.get("/subjects")
    expect(response.body).toEqual(expect.arrayContaining([{id: expect.any(Number), name: expect.any(String)}]))
  })
})