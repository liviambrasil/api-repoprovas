import { getRepository } from "typeorm";
import Test from "../../src/entities/tests";

async function clearDatabase () {
    await getRepository(Test).delete({})
}

export { clearDatabase }