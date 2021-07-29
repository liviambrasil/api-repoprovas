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
  await getConnection().close();
});

const agent = supertest(app)

describe("GET /teste" ,() => {
  it('returns 201 for valid params', async () => {
      const response = await agent.get("/teste");
      expect(response.status).toEqual(201);
  })
})