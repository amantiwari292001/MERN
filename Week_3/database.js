const express = require("express");
const zod = require("zod");
const app = express();
app.use(express.json());
const port = 71;

const mongoose = require("mongoose");//Install it with 'npm install mongoose' to establish connection with db.
mongoose.connect('mongodb+srv://aman:ai7FdKAEIZS0ArI0@myfirstdb.qdi3bbi.mongodb.net/DB1');
const input = mongoose.model('Users', {name: String, number: String});//name and schema


const schema = zod.object({
    name: zod.string(),
    number: zod.number()
});


app.post('/saveData', async (req, res) => {
    let response = schema.safeParse(req.body);
    if(response.success===true){console.log('Schema is correct.')}

    const existing = await input.findOne({name: req.body.name});//To search the matched sata.
    if(existing){
        res.status(400).send('Already Exists....');
    }else{
        const user = new input({
        name: req.body.name,
        number: req.body.number
        });
        user.save();
        res.send('Data is served💻');
    }
});

app.get('/getData', async(req, res) => {
    let existing = await input.findOne({name: req.body.name});
    if(existing){
        res.send(`Name is ${existing.name} and number is ${existing.number}`);
    }else{
        res.send('Something is wrong.');
    }
});

app.listen(port);
