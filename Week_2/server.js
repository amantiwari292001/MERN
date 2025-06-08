//On CLI-> npm init -y(package.json), npm install express(install express package)

//  /--------------------------------------------------------------------------------\
// | Add file name under script in package.json file "devStart": "nodemon server.js" |
// | ON CLI-> npm i --save-dev nodemon, npm run devStart to run the server file.     |   
//  \--------------------------------------------------------------------------------/
// nodemon helps in auto refreshing the server after saving the changes.
// res.status(500).send('Internal Server Error');
// res.download('server.js');

const express = require('express'); //Start express
const port = 3000; //Choose a port
const app = express(); //Returns express object to app
const bodyParser = require('body-parser'); //On CLI use 'npm install body-parser' to get this package that converts request into readable form.
const { stringify } = require('querystring');
app.use(bodyParser.json());


app.get('/aman', (req, res) => { //Calling get request. /aman  is the router of this request
    console.log('Server Started....');
    // res.send('I am a server reponse.')
    res.status(500).send('Internal Server Error.');
    // res.download('server.js');
    // res.json({name: 'Aman', age: 23});
});

app.post('/bebo', (req, res) => { //Calling post request
    // const json = {name: 'Ananya', age: 16};
    // res.json(`Name: ${json.name}, Age: ${json.age}`);
    res.send(req.body.Q);
});

function calculate(n){
    let sum = 0;
    for(let i = 1;i<=n;i++){
        sum+=i;
    }return sum;
}
app.get('/calculate', (req, res) => {
    const sum = calculate(req.query.num); //Queries allows us to pass the parameters with url, after the endpoint use "?yourVariable=value&...", "http://localhost:3000/calculate?num=13"
    res.send("The sum of the numbers is " + sum.toString());
});

app.get('/files/:fileName', (req, res) => {
    const fs = require("fs");
    fs.readFile(`${req.params.fileName}`,'utf-8', (err, data) => {//params allow us to pass the filed as variable. Make sure to use the same varibale inside the request same as the url."http://localhost:3000/files/bash-commands.txt"
        if(err){
            res.status(404).send("Something went wrong.")
        } else {
            res.send(data);
        }
    })
});

app.listen(port); //Above code will be listened to this port. Two apps can't access the same port.

// --------------------------------------------------------------------------------------------------------------------\
// The server is the environment where the API runs, processing those requests and returning the appropriate responses. |
// --------------------------------------------------------------------------------------------------------------------/

// To run this in your phone, connect both the systems with same network and then pass the ip address of the laptop on phone. 192.168.0.117:3000/aman.