import { getRepository } from "typeorm";
import Category from "../../src/entities/categories";

async function createCategory(): Promise<number> {
    const result = await getRepository(Category).insert({name: "P1"})
    return(result.generatedMaps[0].id)
}

export { createCategory }