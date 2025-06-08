const express = require('express');
const zod = require('zod'); //It validates data. Use "npm install zod"
const app = express();
app.use(express.json());//This will restrict the request to accept only json body.
const port = 3000;

function firstCheck(req,res,next){// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
    if(!req.body.name){
        res.status(411).send('Please enter the username.')
    }
    if((req.body.name)!='aman' || (req.body.password)!='aman123@'){
        res.send('Username or Password is incorrect.');
    } else {
        next();
    }
}

function secondCheck(req,res,next){
    if(!req.headers.name){//Getting data from headers.
        res.status(411).send('Please enter the username.')
    }
    if((req.headers.name)!='aman' || (req.headers.password)!='aman123@'){
        res.send('Username or Password is incorrect.');
    } else {
        next();
    }
}

app.use(firstCheck);
app.get('/firstCheck', (req,res) => {//passing firstCheck as middleware function
    res.send('Login Successful from firstCheck....!');
});

app.get('/secondCheck', secondCheck, (req,res) => {
    res.send('Login Successful from secondCheck....!');
});

const schema = zod.number();//This line will be used to check if the input is a number or not.
const schemaObj = zod.object({
    email: zod.string().email(),
    phone: zod.number().min(10)
});
app.get('/zod',(req,res) => {
    let data = req.body;
    const response = schemaObj.safeParse(data);
    if(!response.success){//Here we are checking the success response of the validation.
        res.status(411).send(response);
    } else {
        res.send('Format is correct...');
    }
});

// Global catch
app.use(function (err, req, res, next){ //Error handling middleware function. It has four parameters.
    res.send('Something went wrong. Please try again later.');
});

app.listen(port);