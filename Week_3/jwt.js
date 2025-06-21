const express = require("express");
const app = express();
app.use(express.json());
const port = 72;
const zod = require("zod");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://aman:ai7FdKAEIZS0ArI0@myfirstdb.qdi3bbi.mongodb.net/DB2');
const porcessDB = mongoose.model('Tokens', {token: String});

const jwt = require("jsonwebtoken");//Use npm install jsonwebtoken to install the jwt dependencies.


app.post('/postToken', async (req, res) => {
    let details = {
        name: req.body.name,
        age: req.body.age
    };
    const token = jwt.sign(details, '159752');
    const saveToken = new porcessDB({token: token});
    saveToken.save();
    res.send(`Token: ${token}`);
});

app.get('/verifyToken', async(req,res) => {
    try{
        const verified = jwt.verify(req.headers.jwt, '159752');//This will return you the payload., Every timestap will give us different jwt. Only the correct secrert key can verify the signature.
        //We can use decode also, which will return us the payload without checking the authenticity.
        //Even after changing the payload, we can't change the signature.
        res.send(verified);
    } catch(e){
        res.send('Wrong');
    }
});
app.listen(port);