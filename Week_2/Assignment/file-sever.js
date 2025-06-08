const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.get('/files', (req, res) => {
    fs.readdir('Document', 'utf-8', (err, data) => {//this readdir returns the files inside a folder as an array.
        console.log('Returned Files.');
        res.send(data);
    });
})

app.get('/file/:file', (req, res) => {
    fs.readFile(`Document/${req.params.file}`, 'utf-8', (err, data) => {
        console.log('Returned Files.');
        res.send(data);
    });
})
app.listen(port);