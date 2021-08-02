import joi from "joi"

const testSchema = joi.object({
    name: joi.string().required(),
    category: joi.string().required().valid("P1", "P2", "P3", "2ch", "Outras"),
    subject: joi.string().required(),
    professor: joi.string().required(),
    link: joi.string().required(),
    semester: joi.string().required()
})

export { testSchema }