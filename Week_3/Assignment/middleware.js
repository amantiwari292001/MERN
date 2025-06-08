const zod = require("zod");
const { getData } = require("./dbManagement");

let schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});
async function authenticate(req, res, next){
    try{
        if(schema.safeParse(req.body).success){
            let existing = await getData(req.body.username);
            if(existing && req.body.password===existing.password){
                next();
            }else{
                res.send("Username or Password is incorrect.")
            }
        }else{
            res.send("Wrong Inputs");
        }   
    }catch(e){
        res.send("An error occured.");
    }
}

module.exports = authenticate;