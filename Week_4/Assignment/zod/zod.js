const zod = require('zod');
const inputSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});

const courseSchema = zod.object(
    {
        title: zod.string(),
        description: zod.string(),
        image: zod.string(),
        price: zod.number()
    }
);

module.exports = {inputSchema, courseSchema};