const { User } = require("../db");
const inputSchema = require("../zod/zod");

async function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    const existing = await User.findOne(
        {
            username: username,
            password: password
        }
    );
    if(existing){
        next();
    }else{
        res.status(403).json({'messgae': 'User not present'});
    }
}

module.exports = userMiddleware;