const { Admin } = require("../db");
const inputSchema = require("../zod/zod");

async function adminMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    const existing = await Admin.findOne(
        {
            username: username,
            password: password
        }
    );
    if(existing){
        next();
    }else{
        res.status(403).json({'message' : 'Admin not present...'});
    }
}

module.exports = adminMiddleware;